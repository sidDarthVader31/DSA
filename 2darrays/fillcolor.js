
/**
 * link: https://leetcode.com/problems/flood-fill/
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const seen= new Array(image.length).fill(0).map(()=>{
    return new Array(image[0].length).fill(0)
  });
  let originalColor = image[sr][sc];
  const fill = (row, col) =>{
    if(row <0 || row >= image.length|| col <0 || col >= image[0].length
    || seen[row][col] || image[row][col]!=originalColor){
        return;
    }
    seen[row][col] =1;
    image[row][col] = color;
    fill(row-1,col)
    fill(row, col+1)
    fill(row+1, col)
    fill(row, col-1)
  }
  fill(sr,sc)
  return image;
};

