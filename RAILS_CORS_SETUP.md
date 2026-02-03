# Rails CORS Setup Guide

Follow these steps to configure CORS in your Rails backend.

## Step 1: Add rack-cors gem

1. Open your Rails project's `Gemfile`

2. Add this line (usually in the main dependencies, not in a group):
   ```ruby
   gem 'rack-cors'
   ```

3. If you're using Rails API mode, you might already have it. Check first:
   ```bash
   grep rack-cors Gemfile
   ```

4. Install the gem:
   ```bash
   bundle install
   ```

## Step 2: Configure CORS

1. Create or edit the CORS initializer file:
   ```bash
   # In your Rails project root
   touch config/initializers/cors.rb
   ```

2. Open `config/initializers/cors.rb` and add:

   ```ruby
   # config/initializers/cors.rb
   Rails.application.config.middleware.insert_before 0, Rack::Cors do
     allow do
       # Allow requests from your React frontend
       origins 'http://localhost:5173'
       
       # Allow requests to any resource
       resource '*',
         headers: :any,
         methods: [:get, :post, :put, :patch, :delete, :options, :head],
         credentials: false
     end
   end
   ```

   **For production, also add your production frontend URL:**
   ```ruby
   Rails.application.config.middleware.insert_before 0, Rack::Cors do
     allow do
       origins 'http://localhost:5173', 'https://your-frontend-domain.com'
       
       resource '*',
         headers: :any,
         methods: [:get, :post, :put, :patch, :delete, :options, :head],
         credentials: false
     end
   end
   ```

## Step 3: Restart Rails Server

After making these changes, **restart your Rails server**:
```bash
# Stop the server (Ctrl+C) and restart:
rails server
```

## Alternative: If using Rails API

If your Rails app was generated with the `--api` flag, CORS might already be configured. Check:

1. Look for `config/initializers/cors.rb`
2. If it exists, update the origins to include `'http://localhost:5173'`
3. Make sure `rack-cors` is in your Gemfile

## Verify CORS is Working

1. Start your Rails server:
   ```bash
   rails server
   ```

2. In another terminal, test with curl:
   ```bash
   curl -H "Origin: http://localhost:5173" \
        -H "Access-Control-Request-Method: GET" \
        -H "Access-Control-Request-Headers: X-Requested-With" \
        -X OPTIONS \
        http://localhost:3000/blogs
   ```

3. You should see CORS headers in the response like:
   ```
   Access-Control-Allow-Origin: http://localhost:5173
   Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
   ```

## Troubleshooting

### CORS still not working?
- Make sure you **restarted the Rails server** after changes
- Check Rails logs for CORS-related errors
- Verify the origin in CORS config matches exactly (no trailing slashes)
- Check that `rack-cors` gem is actually installed: `bundle list | grep cors`

### Getting 401/403 errors?
- If you're using authentication, you might need to adjust CORS settings
- Check if your API requires authentication tokens

### Need to allow credentials?
If your API uses cookies or auth tokens, update CORS config:
```ruby
resource '*',
  headers: :any,
  methods: [:get, :post, :put, :patch, :delete, :options, :head],
  credentials: true  # Change to true if using cookies/auth
```

## Next Steps

After CORS is configured:
1. Restart Rails server
2. Restart React dev server (if running)
3. Test the connection by visiting `http://localhost:5173/blogs`
4. Check browser console for any remaining errors
