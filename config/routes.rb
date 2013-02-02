Superjova::Application.routes.draw do
	resources :web
	resources :resume
	resources :about
  root :to => "home#index"
end
