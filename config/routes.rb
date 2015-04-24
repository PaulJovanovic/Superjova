Superjova::Application.routes.draw do
  root :to => "home#index"
  get "/about", to: "home#about"
  get "/clients", to: "home#clients"
  get "/contact", to: "home#contact"
end
