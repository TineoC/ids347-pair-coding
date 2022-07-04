| **Test Case ID** | **Test Case Description**  | **Test Data**                            | **Expected Result** |
|------------------|----------------------------|------------------------------------------|---------------------|
| TU01             | [2,6) contains (2,4)       | Range1 = "[2,6)" Range2 = "(2,4)"        | True                |
| TU02             | [2,6) contains {-1,1,6,10} | Range1 = "[2,6)" Range2 = {-1, 1, 6, 10} | False               |
| TU03             | [2,6) contains {2,3,4,5}   | Range1 = "[2,6)" Range2 = {2, 3, 4, 5}   | True                |
| TU04             | [2,6) contains {2,3,6}     | Range1 = "[2,6)" Range2 = {2, 3, 6}      | False               |
| TU05             | [2,6) contains {}          | Range1 = "[2,6)" Range2 = {}             | False               |
| TU06             | [2,6) contains (1, 6)      | Range1 = "[2,6)" Range2 = "(1,6)"        | False               |
| TU07             | [2,5) contains [7,10)     | Range1 = "[2,5)" Range2 = "[7,10)"        | False               |
| TU08             | [2,5) contains [3,10)     | Range1 = "[2,5)" Range2 = "[3,10)"        | False               |
| TU09             | [3,5) contains [2,10)     | Range1 = "[3,5)" Range2 = "[2,10)"        | False               |
| TU10             | [2,10) contains [3,5]     | Range1 = "[2,10)" Range2 = "[3,5]"        | True               |
| TU11             | [3,5] contains [3,5]     | Range1 = "[3,5]" Range2 = "[3,5]"       | False               |
