def cube_copy
  @cube_copy = Cube.new
  @cube_copy.cube = state_to_array(params[:state]) if params[:state]
  @cube_copy
end

def state_to_array(num_string)
  
  return Cube.new.cube if num_string == nil  

  array = [[],[],[],[],[],[]]
  x = 0
  y = 0

  6.times do
    9.times do
      array[x] << num_string.slice(y).to_i
      y += 1
    end
    x += 1
  end

  array 
end



def html_colorize(cube_array)

 words_array = []

 switchhash = { 0 => 'white',
                1 => 'red',
                2 => 'blue',
                3 => 'orange',
                4 => 'green',
                5 => 'yellow'
 }
  

  x = 0
  cube_array.each do |array|
    words_array << []
    array.each do |number_code|
      words_array[x] << switchhash[number_code]
    end
    x += 1
  end

  words_array 
end

