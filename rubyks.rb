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

get("/scramble") do
  @cube.scramble
  redirect "/?state=#{@cube.cube.join.to_s}"
end

get("/u") do
  @cube.u
  redirect "/?state=#{@cube.cube.join.to_s}"
end

