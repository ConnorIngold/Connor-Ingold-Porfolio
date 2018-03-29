Rails.application.routes.draw do
  root to: 'pages#home'
  get '/underconstrution' => 'pages#underconstrution'

end
