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

post("/move") do
  direction = params[:direction]
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.send(direction)
  json tempcube.cube
end

post("/solve") do
  tempcube = Cube.new
  tempcube.cube = html_decolorize(params[:state].values)

  if tempcube.cube[5][0] == 0
    tempcube.turn_over.turn_over
  elsif tempcube.cube[0][0] != 0
    tempcube.turn until tempcube.cube[3][0] == 0
    tempcube.turn_over
  end

  tempcube.simple_solve
  params[:hist] = []
  tempcube.hist.each {|move| params[:hist] << " " + move }
  json [html_colorize(tempcube.cube), params[:hist]]
end
