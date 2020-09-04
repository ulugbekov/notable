Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :physicians, only: :index do
        resources :appointments, only: :index
      end
    end
  end
end
