require 'sinatra'
require 'rubyks'

require_relative 'helpers/cubehelpers.rb'

get("/") do
  erb :index
end

get("/:state") do
  "It worked! " + params[:state] + rand(100).to_s
end
