# Quick Start: Connect Frontend to Rails Backend

Follow these steps to connect your React frontend to your Rails backend.

## 🚀 Step-by-Step Connection

### Step 1: Create Environment File (Frontend)

1. In your React project root, create a `.env` file:
   ```bash
   # In the project root directory
   touch .env
   ```

2. Add this line to `.env`:
   ```env
   VITE_API_URL=http://localhost:3000
   ```
   ⚠️ **Important:** Change `3000` if your Rails server uses a different port.

### Step 2: Configure Rails Backend for CORS

1. In your Rails backend project, add to `Gemfile`:
   ```ruby
   gem 'rack-cors'
   ```

2. Run:
   ```bash
   bundle install
   ```

3. Create or update `config/initializers/cors.rb`:
   ```ruby
   Rails.application.config.middleware.insert_before 0, Rack::Cors do
     allow do
       origins 'http://localhost:5173'  # Your Vite dev server
       
       resource '*',
         headers: :any,
         methods: [:get, :post, :put, :patch, :delete, :options, :head]
     end
   end
   ```

4. Restart your Rails server.

### Step 3: Ensure Rails API Endpoints Exist

Your Rails backend needs these routes:

```ruby
# config/routes.rb
Rails.application.routes.draw do
  resources :blogs, only: [:index, :show]
  # ... other routes
end
```

And a controller that returns JSON:

```ruby
# app/controllers/blogs_controller.rb
class BlogsController < ApplicationController
  def index
    @blogs = Blog.all
    render json: @blogs
  end

  def show
    @blog = Blog.find(params[:id])
    render json: @blog
  end
end
```

### Step 4: Start Both Servers

**Terminal 1 - Rails Backend:**
```bash
cd path/to/your/rails/backend
rails server
# Should start on http://localhost:3000
```

**Terminal 2 - React Frontend:**
```bash
cd path/to/your/react/frontend
npm run dev
# Should start on http://localhost:5173
```

### Step 5: Test the Connection

1. Open your browser to `http://localhost:5173/blogs`
2. Open Browser DevTools (F12) → Network tab
3. You should see a request to `http://localhost:3000/blogs`
4. Check the Console tab for any errors

## ✅ Verification Checklist

- [ ] `.env` file exists with `VITE_API_URL`
- [ ] `rack-cors` gem installed in Rails
- [ ] CORS configured in Rails (`config/initializers/cors.rb`)
- [ ] Rails server running on port 3000 (or your port)
- [ ] React dev server running on port 5173
- [ ] Rails `/blogs` endpoint returns JSON
- [ ] No CORS errors in browser console

## 🔍 Testing the API Manually

Test if your Rails API is working:

```bash
# In a terminal, test the endpoint:
curl http://localhost:3000/blogs

# Should return JSON array of blogs
```

## 🐛 Common Issues

### Issue: "Network Error" or CORS error
**Solution:** 
- Check CORS configuration in Rails
- Make sure Rails server is running
- Verify the port in `.env` matches Rails port

### Issue: "404 Not Found"
**Solution:**
- Check Rails routes: `rails routes | grep blogs`
- Verify controller exists and has correct methods
- Check Rails server logs

### Issue: Environment variable not working
**Solution:**
- Restart the Vite dev server after creating `.env`
- Ensure variable name starts with `VITE_`
- Check `.env` file is in project root

### Issue: Empty array or no data
**Solution:**
- Check Rails database has blog records
- Verify JSON response format matches expected structure
- Check browser console for errors

## 📝 Expected Data Format

Your Rails API should return blogs in this format:

```json
[
  {
    "id": 1,
    "title": "Blog Title",
    "intro": "Short intro text",
    "content": "Full blog content...",
    "image_url": "https://example.com/image.jpg"
  }
]
```

The frontend code will handle variations in field names (`image` vs `image_url`, `intro` vs `excerpt`, etc.)

## 🎯 Next Steps

Once connected, you can:
1. Test the `/blogs` page to see blogs from your Rails API
2. Click on a blog to see the detail page
3. Add more API services for other resources (Gallery, Team, etc.)
4. Add authentication if needed

For more details, see `BACKEND_SETUP.md`
