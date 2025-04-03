# Tic-Tac-Toe in the Affine Plane of Order 4

Welcome to Affine Plane Tic-Tac-Toe, a strategic twist on the classic game, utilizing the concept of Mutually Orthogonal Latin Squares (MOLS) of order 4. This game extends the traditional tic-tac-toe to a more complex and challenging format, suitable for players looking to test their strategic thinking and pattern recognition skills.

## Game Description

In this version of tic-tac-toe, the game board is expanded into multiple layers, each corresponding to a different MOLS. Players take turns placing their symbols ('X' or 'O') on the 4x4 grid, with the objective to complete a line of four identical symbols in any of the MOLS layers.

### Rules

1. **Game Board**: The board is a 4x4 grid, and there are three such grids layered on top of each other, each representing a different MOLS.
2. **Objective**: The objective is to align four of your symbols ('X' or 'O') on lines defined by any of the MOLS. A line is completed if it contains the same symbol in all positions corresponding to the same number in any MOLS.
3. **Winning**: A player wins by completing any line in any MOLS before their opponent.
4. **Turns**: Players alternate turns, placing one symbol per turn on the grid.

DISCLAIMER:

Here are the Mutually Orthogonal Latin Squares of order 4, used in the game:

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
| 0 | 2 | 3 | 1 |
| 1 | 3 | 2 | 0 |
| 2 | 0 | 1 | 3 |
| 3 | 1 | 0 | 2 |

### MOLS 3
|   |   |   |   |
|---|---|---|---|
| 0 | 3 | 1 | 2 |
| 1 | 2 | 0 | 3 |
| 2 | 1 | 3 | 0 |
| 3 | 0 | 2 | 1 |

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/affine-plane-tic-tac-toe.git
cd affine-plane-tic-tac-toe
