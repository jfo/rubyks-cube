require 'sinatra'
require 'rubyks'

require_relative 'helpers/cubehelpers.rb'

before do
  @cube = Cube.new
  @cube.cube = state_to_array(params[:state])
end

get("/") do
  erb :index
end

get("/u") do
  @cube.u
  erb :index
end

get("/u/:state") do
  @cube.u
  erb :index
end
