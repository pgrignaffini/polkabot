FROM node:current-slim

RUN apt-get update && apt-get install -y \
    tzdata \
    tini \
    netbase \
    && rm -rf /var/lib/apt/lists/*

# Set the timezone
RUN ln -fs /usr/share/zoneinfo/America/Los_Angeles /etc/localtime && \
    dpkg-reconfigure --frontend noninteractive tzdata

WORKDIR /app

# Copy all files except the "functions" folder
COPY ./ /app/

RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
    else echo "Lockfile not found." && exit 1; \
    fi

RUN yarn build && yarn cache clean && rm -rf /usr/local/share/.cache/yarn

# Ensure the script is executable
RUN chmod +x /app/run.sh

# Use tini to manage zombie processes and signal forwarding
# https://github.com/krallin/tini
ENTRYPOINT ["/usr/bin/tini", "--"]

# Pass the startup script as arguments to tini
CMD ["/app/run.sh"]