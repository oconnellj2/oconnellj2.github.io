"""
    Author: James O'Connell
    Program: jigsaw.py
    Purpose: Read in jigsaw puzzle pieces, computes the proper arrangment and
            prints out the completed puzzle
    Class: CSC120, 001, Fall2019.
"""
def join_LR(left, right):
    """
    Joins the left and right pieces, ignoring if they have matching chars next
    to each other.
    
    Args:
        left(list): 4 strings, each of length 3.
        right(list): 4 strings, each of length 3.
    Returns:
        joinedResults(list): Pieces left and right joined.
    """
    # Checks if the pieces have a matching column.
    match = True
    for i in range(len(left)):
        # Checking the string values next to each other.
        if len(left[i]) > 1:
            if left[i][-2] == right[i][0]:
                match = False
                break

    # Constructs joined pieces.
    joinedResults = []
    if match:
        # Appends and excludes the last char in left if pieces match.
        for i in range(len(left)):
            joinedResults.append(left[i][:-1] + right[i])
    else:
        # Appends the pieces joined.
        for i in range(len(left)):
            joinedResults.append(left[i] + right[i])
    
    return joinedResults

def join_TB(top, bot):
    """
    Joins the top and bottom pieces, ignoring if they have matching chars next
    to each other.
    
    Args:
        top(list): 4 strings, each of length 3.
        bot(list): 4 strings, each of length 3.
    Returns:
        (list): Pieces top and bottom joined.
    """
    # Checks for matching sides next to eachother.
    if bot != []:
        if bot[-1] == top[0]:
            del top[0]  # Deletes the matching side.
            return bot + top
    # Returns this when the bottom is empty.
    return bot + top

def match_LR(left, right):
    """
    Computes whether or not the strings in left or right match.
    
    Args:
        left(list): 4 strings, each of length 3.
        right(list): 4 strings, each of length 3.
    Returns:
        (boolean): True if pieces match, False if pieces mismatch.
    """
    return left[1] == right[3][::-1]

def match_TB(top, bot):
    """
    Computes whether or not the strings in top or bot match.
    
    Args:
        top(list): 4 strings, each of length 3.
        bot(list): 4 strings, each of length 3.
    Returns:
        (boolean): True if pieces match, False if pieces mismatch.
    """
    return top[2] == bot[0][::-1]

def fill_board(board, wid,hei, pieces):
    """
    Given an empty board (that is, a list-of-lists, filled with None's),
    and a set of pieces, searches to find the right pieces to fill the
    board.

    Finds the pieces by searching through the piece list, and matching
    edges to the bottom and left edge of already-found pieces.  The
    bottom edge of the puzzle is represented by "---" edges, and the left
    edge is represented by "|||" edges.  (The same is true for the right
    and top, but this function doesn't care about that.)

    This function always assumes that we have the perfect number of
    pieces to fill the board, and that there are no ambiguities; it doesn't
    do any backtracking, as it doesn't consider the possibility that it
    might ever fail to find a solution.

    When the function returns, the board has been completely populated with
    piece objects.
    """
    # Loop across the x and y axis of the board.
    for y in range(0,hei):
        for x in range(0,wid):
            # Checks each piece with board[x][y].
            for i in range(len(pieces)): 
                piece = pieces[i]
                
                # Checks for sides of board.
                if x==0:
                    if piece[3] != "|||":
                        continue
                else:
                    left = board[x-1][y]
                    # Checks if sides match.
                    if not match_LR(left, piece):
                        continue
                
                # Checks for top and bottom.
                if y==0:
                    if piece[2] != "---":
                        continue
                else:
                    bot = board[x][y-1]
                    # Checks if top and bottom match.
                    if not match_TB(piece, bot):
                        continue

                board[x][y] = piece  # Assigns the piece to the proper place.
                pieces = pieces[:i]+pieces[i+1:]
                break

            assert board[x][y] is not None, (x,y, board, pieces)

def read_pieces_file():
    """
    Reads the desired pieces file, identifies the width, height, and splits
    the pieces into a 2d list.

    Returns:
        wid(int): Width of the puzzle.
        hei(int): Height of the puzzle.
        pieces(2d list): Container where each item is exactly 4 strings, each
                        of which is 3 characters long.
    """
    file = open(input("Give the puzzle name: "))
    data = file.readlines()  # Turns file object into list of each line.
    file.close()

    # Constructs list of pieces.
    pieces = []
    for line in data:
        # Filters to pull lines that are puzzle pieces or the width & height.
        if line[0].isdigit() or line[0] == ' ':
            line = line.split()
            # Identifies width & height line.
            if len(line) == 2:
                wid, hei = int(line[0]), int(line[1])
            else:
                pieces.append(tuple(line))

    return wid, hei, pieces

def build_empty_board(wid, hei):
    """
    Builds an empty grid(2d list) thats wid-by-hei.

    Args:
        wid(int): Width.
        hei(int): Height.
    Returns:
        board(2d list): Empty grid.
    """
    board = []
    row = []
    # Constructs the board.
    for i in range(wid):
        for j in range(hei):
            row.append(None)
        # Adds the row to the board, clears the row for future use.
        board.append(row)
        row = []

    return board

def piece_to_strs(piece):
    """
    Converts the pieces to 5 strings, each of which is exactly 5 characters
    long.

    Args:
        piece(list): List which makes up the piece.
    Returns:
        (list): Strings where String[0] is the bottom and String[4] is the top.
    """
    # Constructs list of strings.
    results = []
    results.append(' ' + piece[0] + ' ')  # Top.
    results.append(piece[3][2] + '   ' + piece[1][0])  # Mid.
    results.append(piece[3][1] + '   ' + piece[1][1])  # Mid.
    results.append(piece[3][0] + '   ' + piece[1][2])  # Mid.
    results.append(' ' + piece[2][::-1] + ' ')  # Bottom.

    return results[::-1]  # Reversed so bottom is string[0].

def print_strs(output_lines):
    """
    Prints grid of completed jigsaw puzzle line by line.

    Args:
        output_lines(list): lines of the final output result to be printed.
    """
    # Prints line by line of output.
    for line in output_lines[::-1]:
        print(line)

def main():
    """
    Queries the user for a filename, then reads that file as a list of
    jigsaw puzzle pieces; each piece is represented as a tuple of 4
    3-character strings, representing the 4 edges of the piece, staring
    at the top (with the leftmost character) and proceeding through all
    of the characters in clockwise order.

    Solves the jigsaw, and prints out a depiction of the puzzle at the
    end.
    """
    wid, hei, pieces = read_pieces_file()
    board = build_empty_board(wid, hei)
    fill_board(board, wid, hei, pieces)

    output_lines = []
    for y in range(hei):
        this_row = [""]*5
        for x in range(wid):
            this_piece = piece_to_strs(board[x][y])
            this_row = join_LR(this_row, this_piece)
        output_lines = join_TB(this_row, output_lines)
    print_strs(output_lines)

if __name__ == "__main__":
    main()