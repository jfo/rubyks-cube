require 'sinatra'
require 'rubyks'
require 'sinatra/json'
require 'json'
require_relative 'helpers/cubehelpers.rb'

get("/") do
  erb :index
end

post("/scramble") do
  json html_colorize(Cube.new.scramble.cube)
end

post("/reset") do
  json(html_colorize(Cube.new.cube))
end

post("/u") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.u
  json tempcube.cube
end

post("/d") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.d
  json tempcube.cube
end

post("/l") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.l
  json tempcube.cube
end

post("/r") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.r
  json tempcube.cube
end

post("/b") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.b
  json tempcube.cube
end

post("/f") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.f
  json tempcube.cube
end

post("/solve") do
  tempcube = Cube.new
  tempcube.cube = html_decolorize(params[:state].values)
  tempcube.simple_solve
  json html_colorize(tempcube.cube)
end
