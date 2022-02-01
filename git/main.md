# System kontroli wersji GIT

### Lekcja 1 - Zapisywanie zmian

|                           |                                      |
| ------------------------- | ------------------------------------ |
| `git init`                | inicjalizacja repozytorium           |
| `git status`              | sprawdzenie statusu                  |
| `.gitignore`              | lista ignorowanych plików i folderów |
| `git add .`               | dodanie plików do kolejki            |
| `git commit -m "Comment"` | zapisanie zmian w repozytorium       |

<br>

### Lekcja 2 - Przestrzeń robocza i stage

|                              |                                                             |
| ---------------------------- | ----------------------------------------------------------- |
| `git clean`                  | usuwanie nieśledzonych plików i katalogów                   |
| _-n_                         | lista plików, które zostałyby usunięte [ tryb testowy ]     |
| _-d_                         | obsługa katalogów                                           |
| _-i_                         | tryb interaktywny                                           |
| _-f_                         | faktyczne usunięcie plików                                  |
| _-x_                         | katalogi związane ze środowiskiem uruchomieniowym aplikacji |
| `git reset`                  | usunięcie plików z kolejki                                  |
| `git checkout -- index.html` | usunięcie wprowadzonych zmian w pliku                       |
| `git rm index.html`          | usunięcie pliku z repozytorium [ commit usunie go ]         |
| `git checkout index.html`    | przywrócenie wersji pliku [ przydatne po git rm / reset ]   |

<br>

### Lekcja 3 - Przywracanie zmian

|                        |                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------- |
| `git log --oneline`    | podejrzenie historii commitów [ skondensowana forma ]                                 |
| `git checkout`         | operacja polegająca na parzesunięciu wskaźnika HEAD na wskazany commit                |
| `git checkout 25383f9` | tryb odłączonej głowy [ cofnięcie się do wersji projektu ]                            |
| `git checkout master`  | powrót do aktualnej wersji projektu                                                   |
| `git revert`           | odwrócenie zmian z commitu i zapisanie ich jako nowy commit [ bez modyfikacji zmian ] |
| `git revert eb57d4e`   | tworzy nowy commit z wspomaniną wersją                                                |
| `git reset`            | przywraca zmiany w repozytorium do wskazanego punktu w historii zmian                 |
| _--mixed_              | cofanie zmian jednak usunięte zostaną zapisane w katalogu roboczym                    |
| _--soft_               | działa tak samo jak --mixed jednak zmiany zostają dodane na stage                     |
| _--hard_               | wszelkie zmiany zostają usunięte [ dane i commity ]                                   |

<br>

### Lekcja 4 - Przeglądanie historii

|                              |                                                     |
| ---------------------------- | --------------------------------------------------- |
| `git log`                    | wyświetla szczegółowe informacje na temat commitów  |
| _--oneline_                  | skondensowana forma logów w jednej linii            |
| _--author="Stee"_            | wyświetla commity, których autorem jest Stee        |
| _--grep="view"_              | wyszukiwanie konkretnej frazy                       |
| _-3_                         | wyświetlenie podaniej liczby commitów               |
| _-- index.html_              | logi dla konkretnego pliku bądź katalogu            |
| _--patch_                    | wyświtla informacje co konkretnie zostało zmienione |
| _--summary_                  | krótka informacja o tym co zostało zrobione         |
| _--stat_                     | wyświetla statystyki                                |
| _--format="%h %an %s (%cr)"_ | zaawansowane wyświetlanie informacji                |
| `git shortlog`               | pokazuje historię zmian z podziałem na użytkowników |

<br>

### Lekcja 5 - Komentarze dobre praktyki

1. Dzielenie komentarza na tytuł oraz treść
2. Ograniczenie tytułu do 50 znaków
3. Rozpoczynanie komentarza wielką literę
4. Nie dodawanie kropki na końcu tytułu
5. Używanie trybu rozkazującego
6. Ograniczenie długości do 72 znaków [ GIT nam nie złamie linii ]
7. Odpowiadanie na pytania co i dlaczego

<br>

### Lekcja 6 - Polecenie git stash

|                               |                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------- |
| `git stash`                   | odłożenie plików z kolejki do stosu                                          |
| `git branch view`             | utworzenie nowej gałęzi view                                                 |
| `git checkout view`           | przełączenie na wybrany branch                                               |
| `git stash push -m "Comment"` | dodanie komentarza do stosu                                                  |
| _-u_                          | dodanie nieśledzonych plików na stash                                        |
| `git stash list`              | wyświetla listę zmian dostępnych na stosie                                   |
| `git stash apply stash@{0}`   | zmiany zostają przywrócone do katalogu roboczego i zostają również na stosie |
| `git stash pop stash@{0}`     | zmiany zostają przywrócone do katalogu roboczego i nie zostają na stosie     |
| `git stash drop stash@{0}`    | usunięcie tego stash                                                         |
| `git stash clear`             | usunięcie całej stash listy                                                  |
| `git stash branch home`       | utworzenie nowego brancha z plikami ze stosu                                 |

<br>

### Lekcja 7 - Czym jest branch

1. `Master branch` -> stablina wersja projektu połączona z serwerem produkcyjnym
2. `Dev branch` -> testowanie aplikacji połączona z serwerem testowym
3. `Feature branch` -> praca na nowymi funkcjami [ nowa funkcja -> nowy branch ]
4. `User branch` -> gałęzie dla uczestników projektu
5. `Test / Bugfix branch` -> szybkie zmiany, naprawianie bugów

|                                              |                                             |
| -------------------------------------------- | ------------------------------------------- |
| `git merge develop`                          | połączenie brancha develop z masterem"      |
| `git log --graph --decorate --all --oneline` | szczegółowe informacje o połączeniu branchy |
| `git branch -D develop`                      | usunięcie gałęzi                            |

<br>

### Lekcja 8 - Zdalne repoytorium i fork

|                                      |                                                     |
| ------------------------------------ | --------------------------------------------------- |
| `echo "# Text" >> README.md`         | wpisanie tekstu do pliku README.md                  |
| `git remote add origin https://repo` | utworzenie aliasu link pod nazwę origin             |
| `git push -u origin master`          | wysłanie origina na branch master                   |
| _-u_                                 | --set-upstream                                      |
| `git fetch`                          | pobranie zmian z historii repozytorium              |
| `git log origin/master`              | wyświetlenie historii origina                       |
| `git merge origin/master`            | zsynchronizowanie lokalnego repozytorium ze zdalnym |
| `git push origin --delete feature`   | usunięcie zdalnego brancha                          |
| `[git](https://prnt.sc/u9vfye)`      | praca na branchach                                  |
| `git pull`                           | pobranie zmian z repozytorium                       |

<br>

### Lekcja 9 - Rozwiązywanie konflików

1. `git merge` -> git łączy dwa pliki
2. `git merge` -> usunięty plik, który możemy usunąć bądź przywrócić

---

1. Modyfikujemy dwa pliki z czego jeden pushujemy na master, a drugi na home
2. Dodajemy pull request na githubie
3. Rozwiązujemy konflikt webeditorem, bądź przy użyciu komend

|                                       |                                                          |
| ------------------------------------- | -------------------------------------------------------- |
| `git fetch origin`                    | pobranie zmian w historii                                |
| `git checkout -b resolve origin/home` | utworzenie gałęzi resolve z origin/home                  |
| `git merge master`                    | połączenie z gałęzią master w celu rozwiązania konfliktu |
| `git checkout master`                 | przełączenie na mastera                                  |
| `git merge --no-ff resolve`           | połączenie branchy                                       |
| [_--no-ff_](https://prnt.sc/uafbho)   | flaga dzięki, której tworzony jest nowy commit           |
| `git push origin master`              | wysłanie rozwiązanego konfliktu na gałąź master          |
| `git push --force`                    | push do zdalnego repozytorium na siłę                    |

<br>

### Lekcja 10 - Czym jest rebase\_
