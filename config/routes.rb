Superjova::Application.routes.draw do
	resources :project
	resources :web
	resources :resume
	resources :about
  root :to => "home#index"
end
