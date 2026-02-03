# Connecting Frontend to Rails Backend

## Prerequisites
- Your Rails backend should be running
- Rails API should have CORS configured to allow requests from your frontend

## Step 1: Configure Environment Variables

1. Create a `.env` file in the root directory of your project:

```bash
# In your project root
touch .env
```

2. Add your Rails backend URL to the `.env` file:

```env
# Rails Backend API URL
VITE_API_URL=http://localhost:3000
```

**Note:** 
- If your Rails API uses a different port, update accordingly
- If your Rails API has a namespace (e.g., `/api/v1`), include it in the URL: `VITE_API_URL=http://localhost:3000/api/v1`
- For production, use your production API URL

## Step 2: Configure CORS in Rails Backend

Your Rails backend needs to allow requests from your frontend. Add this to your `config/application.rb` or create a `config/initializers/cors.rb` file:

```ruby
# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:5173' # Vite dev server default port
    # For production, add your production frontend URL
    # origins 'https://your-frontend-domain.com'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

Don't forget to add the `rack-cors` gem to your `Gemfile`:

```ruby
gem 'rack-cors'
```

Then run:
```bash
bundle install
```

## Step 3: Rails API Endpoints Expected

The frontend expects the following endpoints from your Rails API:

### Blogs Endpoints

1. **GET /blogs** - List all blogs
   - Expected response format (either):
     ```json
     [
       {
         "id": 1,
         "title": "Blog Title",
         "intro": "Blog intro text",
         "content": "Full blog content",
         "image": "image_url",
         "image_url": "image_url"
       }
     ]
     ```
     OR
     ```json
     {
       "blogs": [
         {
           "id": 1,
           "title": "Blog Title",
           ...
         }
       ]
     }
     ```

2. **GET /blogs/:id** - Get a single blog
   - Expected response format (either):
     ```json
     {
       "id": 1,
       "title": "Blog Title",
       "content": "Full blog content",
       "image": "image_url",
       "image_url": "image_url"
     }
     ```
     OR
     ```json
     {
       "blog": {
         "id": 1,
         "title": "Blog Title",
         ...
       }
     }
     ```

### Blog Model Fields Expected

The frontend expects blogs to have:
- `id` (number)
- `title` (string)
- `intro` or `excerpt` or `description` (string) - for blog list preview
- `content` or `body` or `description` (string) - for full blog content
- `image` or `image_url` (string) - URL to blog image

## Step 4: Adjust API Endpoints (If Needed)

If your Rails API uses different endpoints or namespaces, update the service files:

1. Open `src/services/blogService.js`
2. Update the endpoints:
   ```javascript
   // If your API is namespaced (e.g., /api/v1/blogs)
   const response = await api.get('/api/v1/blogs');
   ```

## Step 5: Test the Connection

1. Make sure your Rails backend is running:
   ```bash
   rails server
   ```

2. Make sure your frontend dev server is running:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:5173/blogs` and check:
   - Browser console for any errors
   - Network tab to see API requests
   - That blogs are loading from your backend

## Troubleshooting

### CORS Errors
- Make sure `rack-cors` is configured correctly
- Check that the frontend origin matches what's allowed in CORS config
- Verify CORS headers are being sent

### API Connection Errors
- Check that `VITE_API_URL` in `.env` matches your Rails server URL
- Restart the Vite dev server after changing `.env` file
- Check Rails server logs for incoming requests

### Data Format Issues
- Check browser console for errors
- Verify your Rails API response matches expected format
- The code handles both array responses and object responses, but field names should match

### Environment Variable Not Loading
- Make sure the `.env` file is in the project root
- Restart the dev server after creating/updating `.env`
- Vite requires environment variables to start with `VITE_`

## Additional Configuration

### Adding Authentication

If your Rails API requires authentication, update `src/services/api.js`:

```javascript
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

### Adding More API Services

Follow the pattern in `src/services/blogService.js` to create services for other resources (Gallery, Team, etc.).

## Example Rails Controller

Here's a simple example of what your Rails blogs controller might look like:

```ruby
# app/controllers/blogs_controller.rb
class BlogsController < ApplicationController
  before_action :set_blog, only: [:show]

  def index
    @blogs = Blog.all
    render json: @blogs
  end

  def show
    render json: @blog
  end

  private

  def set_blog
    @blog = Blog.find(params[:id])
  end
end
```

## Support

If you encounter issues:
1. Check browser console for errors
2. Check Rails server logs
3. Verify API endpoints are accessible via curl or Postman
4. Ensure CORS is properly configured
