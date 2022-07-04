| **Test Case ID** | **Test Case Description** | **Test Data** | **Expected Result** |
|---|---|---|---|
| TU01 | [3,5) Range equals [3,5) | Range1 = "[3,5)" Range2 = "[3,5)" | True |
| TU02 | [2,10) Range equals (1,9] | Range1 = "[2,10)" Range2 = "(1,9]" | True |
| TU03 | [2,10) Range equals [3,5) | Range1 = "[2,10)" Range2 = "[3,5)" | False |
| TU04 | [2,5) Range equals [3,10) | Range1 = "[2,5)" Range2 = "[3,10)" | False |
| TU05 | [3,5) Range equals [2,10) | Range1 = "[3,5)" Range2 = "[2,10)" | False |