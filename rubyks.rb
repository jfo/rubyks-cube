require 'sinatra'
require 'rubyks'
require_relative 'helpers/cubehelpers.rb'

get("/") do
  @cube = Cube.new
  erb :index
end

post("/test") do
  return "blue"
end
