map "/" do
  use Rack::Static, urls: [""],
                    root: File.expand_path('./dist'),
                    index: 'index.html'
  run lambda {}
end