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

post("/u") do
  params[:state] #is the json state array
end

post("/d") do
  params[:state] #is the json state array
end

post("/l") do
  params[:state] #is the json state array
end

post("/r") do
  params[:state] #is the json state array
end

post("/b") do
  params[:state] #is the json state array
end

post("/f") do
  params[:state] #is the json state array
end

post("/solve") do
  params[:state] #is the json state array
end
