public class GridPath {    
    // Rows stored contiguously.
    public Location getNextLoc(int row, int col) {
        boolean rightNeighborExists = col < (grid[0].length - 1);
        boolean bottomNeighborExists = row < (grid.length - 1);

        if (rightNeighborExists && bottomNeighborExists) {
            if (grid[row][col + 1] < grid[row + 1][col]) {
                return new Location(row, col + 1);
            } else {
                return new Location(row + 1, col)
            }
        } else {
            if (rightNeighborExists) {
                return new Location(row, col + 1);
            } else {
                return new Location(row + 1, col);
            }
        }
    }

    public int sumPath(int row, int col) {
        int currentRow = row;
        int currentCol = col;

        int totalSum = 0;
        while (currentRow < grid.length && currentCol < grid[0].length) {
            totalSum += grid[row][col];
            Location newLocation = getNextLoc(currentRow, currentCol);

            currentRow = newLocation.getRow();
            currentCol = newLocation.getCol();
        }

        return totalSum;
    }
}

