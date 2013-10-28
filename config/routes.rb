ClassSite::Application.routes.draw do
  root :to => 'students#index'
  get '/', :to => 'students#index'
  get '/show/:id', :to => 'students#show', :as => 'show'
end
