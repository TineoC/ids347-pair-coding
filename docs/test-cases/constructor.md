| **Test Case ID** | **Test Case Description**                   | **Test Data**                           | **Expected Result**      |
|------------------|---------------------------------------------|-----------------------------------------|--------------------------|
| TU01             | Create "[43, 2]" Range                      | Range1 = "[43,2]"                       | Error: Invalid Range     |
| TU02             | Create "[43 - 1]" Range                     | Range1 = "[43 - 1]"                     | Error: Invalid Separator |
| TU03             | Create "['Hola']" Range                     | Range1 = "[Hola]"                       | Error: Invalid Range     |
| TU04             | Create "[1234-5263]" Range                  | Range1 = "[1234-5263]"                  | Error: Invalid Separator |
| TU05             | Create "[{1, 2, 3, 5}]" Range               | Range1 = "[{1, 2, 3 , 5}]"              | Error: Invalid Range     |
| TU06             | Create "[   -24, 859]" Range                | Range1 = "[   -24, 859]" Range          |                          |
| TU07             | Create "[   -24,, 859]" Range               | Range1 = "[   -24,, 859]" Range         | Error: Invalid Range     |
| TU08             | Create "[   -24-, 859]" Range               | Range1 = "[   -24-, 859]" Range         | Error: Invalid Range     |
| TU09             | Create "{43, 2]" Range                      | Range1 = "{43,2]"                       | Error: Invalid Range     |
| TU10             | Create "(43, 2)" Range                      | Range1 = "(43,2)"                       |                          |
| TU11             | Create "[2, 43]" Range                      | Range1 = "[2, 43]"                      |                          |
| TU12             | Create "christophertineo02@gmail.com" Range | Range1 = "christophertineo02@gmail.com" | Error: Invalid Range     |
| TU13             | Create "40245283995" Range                  | Range1 = "40245283995"                  | Error: Invalid Range     |