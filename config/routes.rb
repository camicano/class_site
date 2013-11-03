ClassSite::Application.routes.draw do
  root :to => 'students#index'
  get '/', :to => 'students#index'
  get '/show/:slug', :to => 'students#show', :as => 'show'
end
