require 'sinatra'
require 'rubyks'

require_relative 'helpers/cubehelpers.rb'


get("/") do
  @cube = Cube.new
  erb :index
end

get("/u") do
  @cube = Cube.new
  @cube.cube =  
  @cube.u
  erb :index
end
