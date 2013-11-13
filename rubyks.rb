require 'sinatra'
require 'rubyks'
require 'sinatra/json'
require_relative 'helpers/cubehelpers.rb'

get("/") do
  erb :index
end

post("/scramble") do
  json html_colorize(Cube.new.scramble.cube)
end
