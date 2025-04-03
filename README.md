# Tic-Tac-Toe in the Affine Plane of Order 4

Welcome to Affine Plane Tic-Tac-Toe, a strategic twist on the classic game, utilizing the concept of Mutually Orthogonal Latin Squares (MOLS) of order 4. This game extends the traditional tic-tac-toe to a more complex and challenging format, suitable for players looking to test their strategic thinking and pattern recognition skills.

## Game Description

In this version of tic-tac-toe, the game board is expanded into multiple layers, each corresponding to a different MOLS. Players take turns placing their symbols ('X' or 'O') on the 4x4 grid, with the objective to complete a line of four identical symbols in any of the MOLS layers.

### Rules

1. **Game Board**: The board is a 4x4 grid with lines representing the affine plane.
2. **Objective**: The objective is to align four of your symbols ('X' or 'O') on lines defined by this plane. A line is completed when one player "owns" all spots on this line.
3. **Winning**: A player wins by completing any line in any MOLS before their opponent.
4. **Turns**: Players alternate turns, placing one symbol per turn on the grid.

DISCLAIMER:

Here are the Mutually Orthogonal Latin Squares of order 4, used in the game, along with all horizontal and vertical lines:

### MOLS 1
|   |   |   |   |
|---|---|---|---|
| 0 | 1 | 2 | 3 |
| 1 | 0 | 3 | 2 |
| 2 | 3 | 0 | 1 |
| 3 | 2 | 1 | 0 |

### MOLS 2
|   |   |   |   |
|---|---|---|---|
| 0 | 1 | 2 | 3 |
| 3 | 2 | 1 | 0 |
| 1 | 0 | 3 | 2 |
| 2 | 3 | 0 | 1 |

### MOLS 3
|   |   |   |   |
|---|---|---|---|
| 0 | 1 | 2 | 3 |
| 2 | 3 | 0 | 1 |
| 3 | 2 | 1 | 0 |
| 1 | 0 | 3 | 2 |

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/jonah-legg/TicTacToe.git
cd TicTacToe
