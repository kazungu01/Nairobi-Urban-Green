# Connection Checklist ✅

Use this checklist to connect your React frontend to Rails backend.

## Frontend Setup (React)

### ✅ Already Done:
- [x] Axios installed
- [x] API service files created (`src/services/api.js`, `src/services/blogService.js`)
- [x] Blog components updated to fetch from API
- [x] `.env` file created with `VITE_API_URL=http://localhost:3000`
- [x] `.gitignore` updated to exclude `.env`

### ⚠️ Action Required:
- [ ] **Restart your Vite dev server** after `.env` file creation
  ```bash
  # Stop the server (Ctrl+C) and restart:
  npm run dev
  ```

## Backend Setup (Rails)

### Required Steps:

1. **Add CORS gem to Gemfile:**
   ```ruby
   gem 'rack-cors'
   ```
   Then run: `bundle install`

2. **Create CORS configuration:**
   Create file: `config/initializers/cors.rb`
   ```ruby
   Rails.application.config.middleware.insert_before 0, Rack::Cors do
     allow do
       origins 'http://localhost:5173'
       
       resource '*',
         headers: :any,
         methods: [:get, :post, :put, :patch, :delete, :options, :head]
     end
   end
   ```

3. **Ensure Blogs API endpoints exist:**
   - `GET /blogs` - Returns array of all blogs
   - `GET /blogs/:id` - Returns a single blog

4. **Ensure controller returns JSON:**
   ```ruby
   # app/controllers/blogs_controller.rb
   def index
     render json: Blog.all
   end
   
   def show
     render json: Blog.find(params[:id])
   end
   ```

5. **Start Rails server:**
   ```bash
   rails server
   # Should run on http://localhost:3000 (or your configured port)
   ```

## Testing the Connection

1. **Test Rails API directly:**
   ```bash
   curl http://localhost:3000/blogs
   ```
   Should return JSON array.

2. **Test in Browser:**
   - Open: `http://localhost:5173/blogs`
   - Open DevTools (F12) → Network tab
   - Look for request to `http://localhost:3000/blogs`
   - Check Console for errors

3. **Verify data loads:**
   - Blogs should appear on the page
   - No CORS errors in console
   - Network request shows 200 status

## Troubleshooting Quick Fixes

| Error | Solution |
|-------|----------|
| CORS error | Check `config/initializers/cors.rb` exists and Rails server restarted |
| 404 Not Found | Check Rails routes: `rails routes \| grep blogs` |
| Network Error | Verify Rails server is running and port matches `.env` |
| Empty page | Check browser console, verify API returns data in expected format |
| Environment variable not working | Restart Vite dev server after creating `.env` |

## What's Happening Behind the Scenes

1. **Frontend** (`Blog.jsx`) calls `fetchBlogs()` on mount
2. **Service** (`blogService.js`) makes GET request to `/blogs`
3. **API Config** (`api.js`) sends request to `VITE_API_URL/blogs` (http://localhost:3000/blogs)
4. **Rails** receives request and returns JSON
5. **Frontend** displays the data

See `QUICK_START.md` for detailed step-by-step instructions.
