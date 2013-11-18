require 'sinatra'
require 'rubyks'
require 'sinatra/json'
require 'json'
require_relative 'helpers/cubehelpers.rb'

get("/") do
  erb :index
end

get("/2d") do
  erb :index2d
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

post("/ur") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.ur
  json tempcube.cube
end

post("/dr") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.dr
  json tempcube.cube
end

post("/lr") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.lr
  json tempcube.cube
end

post("/rr") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.rr
  json tempcube.cube
end

post("/br") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.bb
  json tempcube.cube
end

post("/fr") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.f
  json tempcube.cube
end

post("/turn") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.turn
  json tempcube.cube
end

post("/turnr") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.turn.turn.turn
  json tempcube.cube
end

post("/turnover") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.turn_over  
  json tempcube.cube
end

post("/turnoverr") do
  tempcube = Cube.new
  tempcube.cube = params[:state].values
  tempcube.turn_over.turn_over.turn_over
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
