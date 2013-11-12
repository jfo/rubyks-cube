require 'sinatra'
require 'rubyks'

require_relative 'helpers/cubehelpers.rb'

get("/") do
  erb :index
end

get("/:state") do
  ":state"
end
