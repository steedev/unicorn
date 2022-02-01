# Regex

### Regex Expressions

| Character(s) | Description                                                      | Example                                       |
| ------------ | ---------------------------------------------------------------- | --------------------------------------------- |
| `.`          | Matches any character                                            | `.at ={"aat", "bat", ...}`                    |
| `[ ]`        | Matches one character from those listed                          | `[cbr]at = {"cat", "bat", "rat"}`             |
| `[ - ]`      | Matches one character from the range of characters listed        | `[a-c]at = {"bat", "cat", "dat"}`             |
| `[^ ]`       | Matches one character from those not listed                      | `[^b-d]at = {"aat","eat", "fat",...}`         |
| `\|`         | Matches one item from those separated by pipes                   | `(ph\|meerk\|r)at = {"phat","meerkat","rat"}` |
| `\*`         | Repeat the previous item 0 or many times                         | `ca\*t = {"ct", "cat", "caat", ...}`          |
| `+`          | Repeat the previous item 1 or many times                         | `ca+t = {"cat", "caat", ...}`                 |
| `?`          | Repeat the previous item 0 or 1 time                             | `ca?t = {"ct","cat"}`                         |
| `{#}`        | Repeat the previous item an exact number of times                | `ca{3}t = {"caaat"}`                          |
| `{#,}`       | Repeat the previous item a min. number of times                  | `ca{2,}t = {"caat","caaat",...}`              |
| `{#,#}`      | Repeat the previous item between a min. and max. number of times | `ca{1,3}t = {"cat","caat","caaat"}`           |

<br>

### Regex Symbols

| Symbol | Description                                                 |
| ------ | ----------------------------------------------------------- |
| `\d`   | Equivalent to `[0-9]`: Matches any digit                    |
| `\D`   | Equivalent to `[^0-9]`: Matches any non-digit               |
| `\s`   | Matches white space character                               |
| `\S`   | Matches a non-white space character                         |
| `\w`   | Equivalent to `[a-zA-Z0-9_]`: Matches a "word" character    |
| `\W`   | Equivalent to `[^a-za-z0-9_]`: Matches a non-word character |
