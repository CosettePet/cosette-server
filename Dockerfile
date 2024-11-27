
# Step 1: Use a Node.js base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Set registry
RUN npm set registry=https://registry.npmmirror.com

# Step 5: Install pm2 global
RUN npm install pm2 -g

# Step 6: Install project dependencies
RUN npm install --only=production

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# Step 7: Copy the rest of the application code to the working directory
COPY . .

# generate prisma
RUN npx prisma generate

# Step 8: Build the NestJS application
RUN npm run build

# Step 9: Expose the port the app will run on
EXPOSE 3000

# Step 10: Define the command to run the app
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
