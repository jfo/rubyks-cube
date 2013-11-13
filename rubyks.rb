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
  json html_colorize(Cube.new.u.cube)
end

post("/d") do
  params[:state] #is the json state array
  json html_colorize(Cube.new.d.cube)
end

post("/l") do
  params[:state] #is the json state array
  json html_colorize(Cube.new.l.cube)
end

post("/r") do
  params[:state] #is the json state array
  json html_colorize(Cube.new.r.cube)
end

post("/b") do
  params[:state] #is the json state array
  json html_colorize(Cube.new.d.cube)
end

post("/f") do
  params[:state] #is the json state array
  json html_colorize(Cube.new.f.cube)
end

post("/solve") do
  params[:state] #is the json state array
  json html_colorize(Cube.new.cube)
end
