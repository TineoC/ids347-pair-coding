| Test Case ID | Test Case Description | Test Data | Expected Result |
|---|---|---|---|
| TU01 | [2,5) Overlaps with [7,10) | Range1 = "[2,5)" Range2 = "[7,10)" | False |
| TU02 | [0,2) Overlaps with (-1,1] | Range1 = "[0,2)" Range2 = "(-1,1]" | True |
| TU03 | [2,10) Overlaps with [3,5) | Range1 = "[2,10)" Range2 = "[3,5)" | True |
| TU04 | [3,5) Overlaps with [3,5) | Range1 = "[3,5)" Range2 = "[3,5)" | True |
| TU05 | [2,5) Overlaps with [3,10) | Range1 = "[2,5)" Range2 = "[3,10)" | True |
| TU06 | [3,5) Overlaps with [2,10) | Range1 = "[3,5)" Range2 = "[2,10)" | True |
| TU07 | [0,2) Overlaps with [2,2) | Range1 = "[0,2)" Range2 = "[2,2)" | False |
| TU08 | [0,0] Overlaps with (0,1) | Range1 = "[0,0]" Range2 = "(0,1)" | False |