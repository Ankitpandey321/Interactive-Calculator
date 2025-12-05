# Use Python slim image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install Flask
RUN pip install --no-cache-dir flask

# Copy all files
COPY . .

# Expose port
EXPOSE 5000

# Run the app
CMD ["python3", "app.py"]
