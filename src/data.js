export const SCHEDULE = [
  { id:'fajr',    time:'05:00', h:5,  m:0,  task:'Fajr Prayer',               sub:'Begin the day with salah — sets the tone',        cat:'prayer', color:'green',  timeable:false },
  { id:'lc',      time:'06:00', h:6,  m:0,  task:'DSA / Leetcode Session',    sub:'1 problem minimum — arrays, trees, graphs, DP',   cat:'dsa',    color:'blue',   timeable:true  },
  { id:'dhuhr',   time:'12:30', h:12, m:30, task:'Dhuhr Prayer',              sub:'Midday salah — step away from the screen',        cat:'prayer', color:'green',  timeable:false },
  { id:'sql',     time:'13:00', h:13, m:0,  task:'SQL & Databases',           sub:'Joins, indexing, transactions, normalization',    cat:'db',     color:'amber',  timeable:true  },
  { id:'cn',      time:'14:00', h:14, m:0,  task:'Computer Networks',         sub:'TCP/IP, DNS, HTTP, OSI model basics',             cat:'cn',     color:'red',    timeable:true  },
  { id:'asr',     time:'15:30', h:15, m:30, task:'Asr Prayer',                sub:'Afternoon salah',                                 cat:'prayer', color:'green',  timeable:false },
  { id:'spring',  time:'16:00', h:16, m:0,  task:'Spring Boot + AI Project',  sub:'Build REST APIs and integrate AI features',       cat:'spring', color:'purple', timeable:true  },
  { id:'react',   time:'17:30', h:17, m:30, task:'React Polish',              sub:'Hooks, state management, component patterns',     cat:'react',  color:'teal',   timeable:true  },
  { id:'maghrib', time:'18:30', h:18, m:30, task:'Maghrib Prayer',            sub:'Sunset salah — pause everything',                 cat:'prayer', color:'green',  timeable:false },
  { id:'quran',   time:'19:00', h:19, m:0,  task:'Quran Recitation',          sub:'Daily wird — consistency over quantity',          cat:'quran',  color:'pink',   timeable:false },
  { id:'isha',    time:'20:30', h:20, m:30, task:'Isha Prayer',               sub:'Night salah — close the day right',               cat:'prayer', color:'green',  timeable:false },
  { id:'gym',     time:'21:00', h:21, m:0,  task:'Gym & Workout',             sub:'Physical health is an amanah — push limits',      cat:'health', color:'amber',  timeable:true  },
]

export const PRAYERS = [
  { id:'fajr',    name:'Fajr',    time:'05:00' },
  { id:'dhuhr',   name:'Dhuhr',   time:'12:30' },
  { id:'asr',     name:'Asr',     time:'15:30' },
  { id:'maghrib', name:'Maghrib', time:'18:30' },
  { id:'isha',    name:'Isha',    time:'20:30' },
]

export const QUOTES = [
  { text: '"Verily, with hardship comes ease."',                                             src: '— Quran 94:5' },
  { text: '"And He found you lost and guided you."',                                         src: '— Quran 93:7' },
  { text: '"Take benefit of five before five: youth, health, wealth, free time, life."',    src: '— Prophet ﷺ' },
  { text: '"The strong man is not the one who is physically powerful, but the one who controls himself in anger."', src: '— Prophet ﷺ' },
  { text: '"Be in this world as if you were a stranger or a traveller."',                    src: '— Prophet ﷺ' },
  { text: '"Whoever treads a path seeking knowledge, Allah eases his path to Jannah."',     src: '— Prophet ﷺ' },
  { text: '"Indeed, Allah will not change the condition of a people until they change what is in themselves."', src: '— Quran 13:11' },
  { text: '"So be patient. Indeed, the promise of Allah is truth."',                         src: '— Quran 30:60' },
  { text: '"And whoever relies upon Allah — then He is sufficient for him."',                src: '— Quran 65:3' },
  { text: '"Allah does not burden a soul beyond that it can bear."',                         src: '— Quran 2:286' },
  { text: '"And seek help through patience and prayer."',                                    src: '— Quran 2:45' },
  { text: '"Do not lose hope, nor be sad."',                                                 src: '— Quran 3:139' },
  { text: '"My success is not but through Allah. Upon Him I have relied."',                  src: '— Quran 11:88' },
  { text: '"And remember your Lord when you forget."',                                       src: '— Quran 18:24' },
  { text: '"Indeed, Allah is with those who are patient."',                                  src: '— Quran 2:153' },
  { text: '"Whoever works righteousness — it is for his own soul."',                         src: '— Quran 41:46' },
  { text: '"Nothing will befall us except what Allah has decreed for us."',                  src: '— Quran 9:51' },
  { text: '"The best among you are those who learn the Quran and teach it."',               src: '— Prophet ﷺ' },
  { text: '"A moment of patience in a moment of anger saves a thousand moments of regret."', src: '— Prophet ﷺ' },
  { text: '"Richness is not having many possessions. Rather, true richness is the richness of the soul."', src: '— Prophet ﷺ' },
]

export const MOTIVATIONAL_BANNERS = [
  { text: 'Your consistency today builds the engineer of tomorrow.', icon: '⚡' },
  { text: 'One problem a day keeps the interview anxiety away.', icon: '🧠' },
  { text: 'Allah sees your effort even when no one else does.', icon: '🌙' },
  { text: 'FAST NUCES → Big Tech. You\'re on the path. Stay on it.', icon: '🚀' },
  { text: 'The best time to solve a leetcode problem was yesterday. The second best is now.', icon: '💻' },
  { text: 'Your dua + your grind = unstoppable.', icon: '✨' },
]

export const NEETCODE_150 = [
  // Arrays & Hashing (9)
  { id:1,   title:'Contains Duplicate',                                    slug:'contains-duplicate',                                    topic:'Arrays & Hashing',        difficulty:'Easy'   },
  { id:2,   title:'Valid Anagram',                                         slug:'valid-anagram',                                         topic:'Arrays & Hashing',        difficulty:'Easy'   },
  { id:3,   title:'Two Sum',                                               slug:'two-sum',                                               topic:'Arrays & Hashing',        difficulty:'Easy'   },
  { id:4,   title:'Group Anagrams',                                        slug:'group-anagrams',                                        topic:'Arrays & Hashing',        difficulty:'Medium' },
  { id:5,   title:'Top K Frequent Elements',                               slug:'top-k-frequent-elements',                               topic:'Arrays & Hashing',        difficulty:'Medium' },
  { id:6,   title:'Encode and Decode Strings',                             slug:'encode-and-decode-strings',                             topic:'Arrays & Hashing',        difficulty:'Medium' },
  { id:7,   title:'Product of Array Except Self',                          slug:'product-of-array-except-self',                          topic:'Arrays & Hashing',        difficulty:'Medium' },
  { id:8,   title:'Valid Sudoku',                                          slug:'valid-sudoku',                                          topic:'Arrays & Hashing',        difficulty:'Medium' },
  { id:9,   title:'Longest Consecutive Sequence',                          slug:'longest-consecutive-sequence',                          topic:'Arrays & Hashing',        difficulty:'Hard'   },
  // Two Pointers (5)
  { id:10,  title:'Valid Palindrome',                                      slug:'valid-palindrome',                                      topic:'Two Pointers',            difficulty:'Easy'   },
  { id:11,  title:'Two Sum II',                                            slug:'two-sum-ii-input-array-is-sorted',                      topic:'Two Pointers',            difficulty:'Medium' },
  { id:12,  title:'3Sum',                                                  slug:'3sum',                                                  topic:'Two Pointers',            difficulty:'Medium' },
  { id:13,  title:'Container With Most Water',                             slug:'container-with-most-water',                             topic:'Two Pointers',            difficulty:'Medium' },
  { id:14,  title:'Trapping Rain Water',                                   slug:'trapping-rain-water',                                   topic:'Two Pointers',            difficulty:'Hard'   },
  // Sliding Window (6)
  { id:15,  title:'Best Time to Buy and Sell Stock',                       slug:'best-time-to-buy-and-sell-stock',                       topic:'Sliding Window',          difficulty:'Easy'   },
  { id:16,  title:'Longest Substring Without Repeating Characters',        slug:'longest-substring-without-repeating-characters',        topic:'Sliding Window',          difficulty:'Medium' },
  { id:17,  title:'Longest Repeating Character Replacement',               slug:'longest-repeating-character-replacement',               topic:'Sliding Window',          difficulty:'Medium' },
  { id:18,  title:'Permutation in String',                                 slug:'permutation-in-string',                                 topic:'Sliding Window',          difficulty:'Medium' },
  { id:19,  title:'Minimum Window Substring',                              slug:'minimum-window-substring',                              topic:'Sliding Window',          difficulty:'Hard'   },
  { id:20,  title:'Sliding Window Maximum',                                slug:'sliding-window-maximum',                                topic:'Sliding Window',          difficulty:'Hard'   },
  // Stack (7)
  { id:21,  title:'Valid Parentheses',                                     slug:'valid-parentheses',                                     topic:'Stack',                   difficulty:'Easy'   },
  { id:22,  title:'Min Stack',                                             slug:'min-stack',                                             topic:'Stack',                   difficulty:'Medium' },
  { id:23,  title:'Evaluate Reverse Polish Notation',                      slug:'evaluate-reverse-polish-notation',                      topic:'Stack',                   difficulty:'Medium' },
  { id:24,  title:'Generate Parentheses',                                  slug:'generate-parentheses',                                  topic:'Stack',                   difficulty:'Medium' },
  { id:25,  title:'Daily Temperatures',                                    slug:'daily-temperatures',                                    topic:'Stack',                   difficulty:'Medium' },
  { id:26,  title:'Car Fleet',                                             slug:'car-fleet',                                             topic:'Stack',                   difficulty:'Medium' },
  { id:27,  title:'Largest Rectangle in Histogram',                        slug:'largest-rectangle-in-histogram',                        topic:'Stack',                   difficulty:'Hard'   },
  // Binary Search (7)
  { id:28,  title:'Binary Search',                                         slug:'binary-search',                                         topic:'Binary Search',           difficulty:'Easy'   },
  { id:29,  title:'Search a 2D Matrix',                                    slug:'search-a-2d-matrix',                                    topic:'Binary Search',           difficulty:'Medium' },
  { id:30,  title:'Koko Eating Bananas',                                   slug:'koko-eating-bananas',                                   topic:'Binary Search',           difficulty:'Medium' },
  { id:31,  title:'Find Minimum in Rotated Sorted Array',                  slug:'find-minimum-in-rotated-sorted-array',                  topic:'Binary Search',           difficulty:'Medium' },
  { id:32,  title:'Search in Rotated Sorted Array',                        slug:'search-in-rotated-sorted-array',                        topic:'Binary Search',           difficulty:'Medium' },
  { id:33,  title:'Time Based Key-Value Store',                            slug:'time-based-key-value-store',                            topic:'Binary Search',           difficulty:'Medium' },
  { id:34,  title:'Median of Two Sorted Arrays',                           slug:'median-of-two-sorted-arrays',                           topic:'Binary Search',           difficulty:'Hard'   },
  // Linked List (11)
  { id:35,  title:'Reverse Linked List',                                   slug:'reverse-linked-list',                                   topic:'Linked List',             difficulty:'Easy'   },
  { id:36,  title:'Merge Two Sorted Lists',                                slug:'merge-two-sorted-lists',                                topic:'Linked List',             difficulty:'Easy'   },
  { id:37,  title:'Reorder List',                                          slug:'reorder-list',                                          topic:'Linked List',             difficulty:'Medium' },
  { id:38,  title:'Remove Nth Node From End of List',                      slug:'remove-nth-node-from-end-of-list',                      topic:'Linked List',             difficulty:'Medium' },
  { id:39,  title:'Copy List with Random Pointer',                         slug:'copy-list-with-random-pointer',                         topic:'Linked List',             difficulty:'Medium' },
  { id:40,  title:'Add Two Numbers',                                       slug:'add-two-numbers',                                       topic:'Linked List',             difficulty:'Medium' },
  { id:41,  title:'Linked List Cycle',                                     slug:'linked-list-cycle',                                     topic:'Linked List',             difficulty:'Easy'   },
  { id:42,  title:'Find the Duplicate Number',                             slug:'find-the-duplicate-number',                             topic:'Linked List',             difficulty:'Medium' },
  { id:43,  title:'LRU Cache',                                             slug:'lru-cache',                                             topic:'Linked List',             difficulty:'Medium' },
  { id:44,  title:'Merge K Sorted Lists',                                  slug:'merge-k-sorted-lists',                                  topic:'Linked List',             difficulty:'Hard'   },
  { id:45,  title:'Reverse Nodes in K-Group',                              slug:'reverse-nodes-in-k-group',                              topic:'Linked List',             difficulty:'Hard'   },
  // Trees (15)
  { id:46,  title:'Invert Binary Tree',                                    slug:'invert-binary-tree',                                    topic:'Trees',                   difficulty:'Easy'   },
  { id:47,  title:'Maximum Depth of Binary Tree',                          slug:'maximum-depth-of-binary-tree',                          topic:'Trees',                   difficulty:'Easy'   },
  { id:48,  title:'Diameter of Binary Tree',                               slug:'diameter-of-binary-tree',                               topic:'Trees',                   difficulty:'Easy'   },
  { id:49,  title:'Balanced Binary Tree',                                  slug:'balanced-binary-tree',                                  topic:'Trees',                   difficulty:'Easy'   },
  { id:50,  title:'Same Tree',                                             slug:'same-tree',                                             topic:'Trees',                   difficulty:'Easy'   },
  { id:51,  title:'Subtree of Another Tree',                               slug:'subtree-of-another-tree',                               topic:'Trees',                   difficulty:'Easy'   },
  { id:52,  title:'Lowest Common Ancestor of BST',                         slug:'lowest-common-ancestor-of-a-binary-search-tree',        topic:'Trees',                   difficulty:'Medium' },
  { id:53,  title:'Binary Tree Level Order Traversal',                     slug:'binary-tree-level-order-traversal',                     topic:'Trees',                   difficulty:'Medium' },
  { id:54,  title:'Binary Tree Right Side View',                           slug:'binary-tree-right-side-view',                           topic:'Trees',                   difficulty:'Easy'   },
  { id:55,  title:'Count Good Nodes in Binary Tree',                       slug:'count-good-nodes-in-binary-tree',                       topic:'Trees',                   difficulty:'Medium' },
  { id:56,  title:'Validate Binary Search Tree',                           slug:'validate-binary-search-tree',                           topic:'Trees',                   difficulty:'Medium' },
  { id:57,  title:'Kth Smallest Element in a BST',                         slug:'kth-smallest-element-in-a-bst',                         topic:'Trees',                   difficulty:'Medium' },
  { id:58,  title:'Construct Binary Tree from Preorder and Inorder',       slug:'construct-binary-tree-from-preorder-and-inorder-traversal', topic:'Trees',              difficulty:'Medium' },
  { id:59,  title:'Binary Tree Maximum Path Sum',                          slug:'binary-tree-maximum-path-sum',                          topic:'Trees',                   difficulty:'Hard'   },
  { id:60,  title:'Serialize and Deserialize Binary Tree',                 slug:'serialize-and-deserialize-binary-tree',                 topic:'Trees',                   difficulty:'Hard'   },
  // Heap / Priority Queue (7)
  { id:61,  title:'Kth Largest Element in a Stream',                       slug:'kth-largest-element-in-a-stream',                       topic:'Heap / Priority Queue',   difficulty:'Easy'   },
  { id:62,  title:'Last Stone Weight',                                     slug:'last-stone-weight',                                     topic:'Heap / Priority Queue',   difficulty:'Easy'   },
  { id:63,  title:'K Closest Points to Origin',                            slug:'k-closest-points-to-origin',                            topic:'Heap / Priority Queue',   difficulty:'Medium' },
  { id:64,  title:'Kth Largest Element in an Array',                       slug:'kth-largest-element-in-an-array',                       topic:'Heap / Priority Queue',   difficulty:'Medium' },
  { id:65,  title:'Task Scheduler',                                        slug:'task-scheduler',                                        topic:'Heap / Priority Queue',   difficulty:'Medium' },
  { id:66,  title:'Design Twitter',                                        slug:'design-twitter',                                        topic:'Heap / Priority Queue',   difficulty:'Medium' },
  { id:67,  title:'Find Median from Data Stream',                          slug:'find-median-from-data-stream',                          topic:'Heap / Priority Queue',   difficulty:'Hard'   },
  // Backtracking (9)
  { id:68,  title:'Subsets',                                               slug:'subsets',                                               topic:'Backtracking',            difficulty:'Medium' },
  { id:69,  title:'Combination Sum',                                       slug:'combination-sum',                                       topic:'Backtracking',            difficulty:'Medium' },
  { id:70,  title:'Permutations',                                          slug:'permutations',                                          topic:'Backtracking',            difficulty:'Medium' },
  { id:71,  title:'Subsets II',                                            slug:'subsets-ii',                                            topic:'Backtracking',            difficulty:'Medium' },
  { id:72,  title:'Combination Sum II',                                    slug:'combination-sum-ii',                                    topic:'Backtracking',            difficulty:'Medium' },
  { id:73,  title:'Word Search',                                           slug:'word-search',                                           topic:'Backtracking',            difficulty:'Medium' },
  { id:74,  title:'Palindrome Partitioning',                               slug:'palindrome-partitioning',                               topic:'Backtracking',            difficulty:'Medium' },
  { id:75,  title:'Letter Combinations of a Phone Number',                 slug:'letter-combinations-of-a-phone-number',                 topic:'Backtracking',            difficulty:'Medium' },
  { id:76,  title:'N-Queens',                                              slug:'n-queens',                                              topic:'Backtracking',            difficulty:'Hard'   },
  // Tries (3)
  { id:77,  title:'Implement Trie',                                        slug:'implement-trie-prefix-tree',                            topic:'Tries',                   difficulty:'Medium' },
  { id:78,  title:'Design Add and Search Words Data Structure',             slug:'design-add-and-search-words-data-structure',            topic:'Tries',                   difficulty:'Medium' },
  { id:79,  title:'Word Search II',                                        slug:'word-search-ii',                                        topic:'Tries',                   difficulty:'Hard'   },
  // Graphs (13)
  { id:80,  title:'Number of Islands',                                     slug:'number-of-islands',                                     topic:'Graphs',                  difficulty:'Medium' },
  { id:81,  title:'Clone Graph',                                           slug:'clone-graph',                                           topic:'Graphs',                  difficulty:'Medium' },
  { id:82,  title:'Max Area of Island',                                    slug:'max-area-of-island',                                    topic:'Graphs',                  difficulty:'Medium' },
  { id:83,  title:'Pacific Atlantic Water Flow',                            slug:'pacific-atlantic-water-flow',                           topic:'Graphs',                  difficulty:'Medium' },
  { id:84,  title:'Surrounded Regions',                                    slug:'surrounded-regions',                                    topic:'Graphs',                  difficulty:'Medium' },
  { id:85,  title:'Rotting Oranges',                                       slug:'rotting-oranges',                                       topic:'Graphs',                  difficulty:'Medium' },
  { id:86,  title:'Walls and Gates',                                       slug:'walls-and-gates',                                       topic:'Graphs',                  difficulty:'Medium' },
  { id:87,  title:'Course Schedule',                                       slug:'course-schedule',                                       topic:'Graphs',                  difficulty:'Medium' },
  { id:88,  title:'Course Schedule II',                                    slug:'course-schedule-ii',                                    topic:'Graphs',                  difficulty:'Medium' },
  { id:89,  title:'Redundant Connection',                                  slug:'redundant-connection',                                  topic:'Graphs',                  difficulty:'Medium' },
  { id:90,  title:'Number of Connected Components in an Undirected Graph', slug:'number-of-connected-components-in-an-undirected-graph', topic:'Graphs',                  difficulty:'Medium' },
  { id:91,  title:'Graph Valid Tree',                                      slug:'graph-valid-tree',                                      topic:'Graphs',                  difficulty:'Medium' },
  { id:92,  title:'Word Ladder',                                           slug:'word-ladder',                                           topic:'Graphs',                  difficulty:'Hard'   },
  // Advanced Graphs (6)
  { id:93,  title:'Reconstruct Itinerary',                                 slug:'reconstruct-itinerary',                                 topic:'Advanced Graphs',         difficulty:'Hard'   },
  { id:94,  title:'Min Cost to Connect All Points',                        slug:'min-cost-to-connect-all-points',                        topic:'Advanced Graphs',         difficulty:'Medium' },
  { id:95,  title:'Network Delay Time',                                    slug:'network-delay-time',                                    topic:'Advanced Graphs',         difficulty:'Medium' },
  { id:96,  title:'Swim in Rising Water',                                  slug:'swim-in-rising-water',                                  topic:'Advanced Graphs',         difficulty:'Hard'   },
  { id:97,  title:'Alien Dictionary',                                      slug:'alien-dictionary',                                      topic:'Advanced Graphs',         difficulty:'Hard'   },
  { id:98,  title:'Cheapest Flights Within K Stops',                       slug:'cheapest-flights-within-k-stops',                       topic:'Advanced Graphs',         difficulty:'Medium' },
  // 1D Dynamic Programming (12)
  { id:99,  title:'Climbing Stairs',                                       slug:'climbing-stairs',                                       topic:'1D Dynamic Programming',  difficulty:'Easy'   },
  { id:100, title:'Min Cost Climbing Stairs',                              slug:'min-cost-climbing-stairs',                              topic:'1D Dynamic Programming',  difficulty:'Easy'   },
  { id:101, title:'House Robber',                                          slug:'house-robber',                                          topic:'1D Dynamic Programming',  difficulty:'Medium' },
  { id:102, title:'House Robber II',                                       slug:'house-robber-ii',                                       topic:'1D Dynamic Programming',  difficulty:'Medium' },
  { id:103, title:'Longest Palindromic Substring',                         slug:'longest-palindromic-substring',                         topic:'1D Dynamic Programming',  difficulty:'Medium' },
  { id:104, title:'Palindromic Substrings',                                slug:'palindromic-substrings',                                topic:'1D Dynamic Programming',  difficulty:'Medium' },
  { id:105, title:'Decode Ways',                                           slug:'decode-ways',                                           topic:'1D Dynamic Programming',  difficulty:'Medium' },
  { id:106, title:'Coin Change',                                           slug:'coin-change',                                           topic:'1D Dynamic Programming',  difficulty:'Medium' },
  { id:107, title:'Maximum Product Subarray',                              slug:'maximum-product-subarray',                              topic:'1D Dynamic Programming',  difficulty:'Medium' },
  { id:108, title:'Word Break',                                            slug:'word-break',                                            topic:'1D Dynamic Programming',  difficulty:'Medium' },
  { id:109, title:'Longest Increasing Subsequence',                        slug:'longest-increasing-subsequence',                        topic:'1D Dynamic Programming',  difficulty:'Medium' },
  { id:110, title:'Partition Equal Subset Sum',                            slug:'partition-equal-subset-sum',                            topic:'1D Dynamic Programming',  difficulty:'Medium' },
  // 2D Dynamic Programming (11)
  { id:111, title:'Unique Paths',                                          slug:'unique-paths',                                          topic:'2D Dynamic Programming',  difficulty:'Medium' },
  { id:112, title:'Longest Common Subsequence',                            slug:'longest-common-subsequence',                            topic:'2D Dynamic Programming',  difficulty:'Medium' },
  { id:113, title:'Best Time to Buy and Sell Stock with Cooldown',         slug:'best-time-to-buy-and-sell-stock-with-cooldown',         topic:'2D Dynamic Programming',  difficulty:'Medium' },
  { id:114, title:'Coin Change II',                                        slug:'coin-change-ii',                                        topic:'2D Dynamic Programming',  difficulty:'Medium' },
  { id:115, title:'Target Sum',                                            slug:'target-sum',                                            topic:'2D Dynamic Programming',  difficulty:'Medium' },
  { id:116, title:'Interleaving String',                                   slug:'interleaving-string',                                   topic:'2D Dynamic Programming',  difficulty:'Medium' },
  { id:117, title:'Longest Increasing Path in a Matrix',                   slug:'longest-increasing-path-in-a-matrix',                   topic:'2D Dynamic Programming',  difficulty:'Hard'   },
  { id:118, title:'Distinct Subsequences',                                 slug:'distinct-subsequences',                                 topic:'2D Dynamic Programming',  difficulty:'Hard'   },
  { id:119, title:'Edit Distance',                                         slug:'edit-distance',                                         topic:'2D Dynamic Programming',  difficulty:'Hard'   },
  { id:120, title:'Burst Balloons',                                        slug:'burst-balloons',                                        topic:'2D Dynamic Programming',  difficulty:'Hard'   },
  { id:121, title:'Regular Expression Matching',                           slug:'regular-expression-matching',                           topic:'2D Dynamic Programming',  difficulty:'Hard'   },
  // Greedy (8)
  { id:122, title:'Maximum Subarray',                                      slug:'maximum-subarray',                                      topic:'Greedy',                  difficulty:'Medium' },
  { id:123, title:'Jump Game',                                             slug:'jump-game',                                             topic:'Greedy',                  difficulty:'Medium' },
  { id:124, title:'Jump Game II',                                          slug:'jump-game-ii',                                          topic:'Greedy',                  difficulty:'Medium' },
  { id:125, title:'Gas Station',                                           slug:'gas-station',                                           topic:'Greedy',                  difficulty:'Medium' },
  { id:126, title:'Hand of Straights',                                     slug:'hand-of-straights',                                     topic:'Greedy',                  difficulty:'Medium' },
  { id:127, title:'Merge Triplets to Form Target Triplet',                 slug:'merge-triplets-to-form-target-triplet',                 topic:'Greedy',                  difficulty:'Medium' },
  { id:128, title:'Partition Labels',                                      slug:'partition-labels',                                      topic:'Greedy',                  difficulty:'Medium' },
  { id:129, title:'Valid Parenthesis String',                              slug:'valid-parenthesis-string',                              topic:'Greedy',                  difficulty:'Medium' },
  // Intervals (6)
  { id:130, title:'Insert Interval',                                       slug:'insert-interval',                                       topic:'Intervals',               difficulty:'Medium' },
  { id:131, title:'Merge Intervals',                                       slug:'merge-intervals',                                       topic:'Intervals',               difficulty:'Medium' },
  { id:132, title:'Non Overlapping Intervals',                             slug:'non-overlapping-intervals',                             topic:'Intervals',               difficulty:'Medium' },
  { id:133, title:'Meeting Rooms',                                         slug:'meeting-rooms',                                         topic:'Intervals',               difficulty:'Easy'   },
  { id:134, title:'Meeting Rooms II',                                      slug:'meeting-rooms-ii',                                      topic:'Intervals',               difficulty:'Medium' },
  { id:135, title:'Minimum Interval to Include Each Query',                slug:'minimum-interval-to-include-each-query',                topic:'Intervals',               difficulty:'Hard'   },
  // Math & Geometry (8)
  { id:136, title:'Rotate Image',                                          slug:'rotate-image',                                          topic:'Math & Geometry',         difficulty:'Medium' },
  { id:137, title:'Spiral Matrix',                                         slug:'spiral-matrix',                                         topic:'Math & Geometry',         difficulty:'Medium' },
  { id:138, title:'Set Matrix Zeroes',                                     slug:'set-matrix-zeroes',                                     topic:'Math & Geometry',         difficulty:'Medium' },
  { id:139, title:'Happy Number',                                          slug:'happy-number',                                          topic:'Math & Geometry',         difficulty:'Easy'   },
  { id:140, title:'Plus One',                                              slug:'plus-one',                                              topic:'Math & Geometry',         difficulty:'Easy'   },
  { id:141, title:'Pow(x, n)',                                             slug:'powx-n',                                                topic:'Math & Geometry',         difficulty:'Medium' },
  { id:142, title:'Multiply Strings',                                      slug:'multiply-strings',                                      topic:'Math & Geometry',         difficulty:'Medium' },
  { id:143, title:'Detect Squares',                                        slug:'detect-squares',                                        topic:'Math & Geometry',         difficulty:'Medium' },
  // Bit Manipulation (7)
  { id:144, title:'Single Number',                                         slug:'single-number',                                         topic:'Bit Manipulation',        difficulty:'Easy'   },
  { id:145, title:'Number of 1 Bits',                                      slug:'number-of-1-bits',                                      topic:'Bit Manipulation',        difficulty:'Easy'   },
  { id:146, title:'Counting Bits',                                         slug:'counting-bits',                                         topic:'Bit Manipulation',        difficulty:'Easy'   },
  { id:147, title:'Reverse Bits',                                          slug:'reverse-bits',                                          topic:'Bit Manipulation',        difficulty:'Easy'   },
  { id:148, title:'Missing Number',                                        slug:'missing-number',                                        topic:'Bit Manipulation',        difficulty:'Easy'   },
  { id:149, title:'Sum of Two Integers',                                   slug:'sum-of-two-integers',                                   topic:'Bit Manipulation',        difficulty:'Medium' },
  { id:150, title:'Reverse Integer',                                       slug:'reverse-integer',                                       topic:'Bit Manipulation',        difficulty:'Medium' },
]

export const STREAK_MILESTONES = [3, 7, 14, 21, 30, 60, 100]

export const MILESTONE_QUOTES = {
  3:   { text: '"Small habits make a big difference."',        src: '— James Clear' },
  7:   { text: '"A week of discipline. A lifetime of reward."', src: '— Anonymous' },
  14:  { text: '"You are building the person you want to be."', src: '— James Clear' },
  21:  { text: '"It takes 21 days to form a habit. You\'re there."', src: '— Habit science' },
  30:  { text: '"30 days. You are not the same person."',      src: '— James Clear' },
  60:  { text: '"Two months. This is who you are now."',       src: '— James Clear' },
  100: { text: '"100 days of showing up. SubhanAllah."',       src: '— Umer\'s Tracker' },
}

export const LC_MILESTONES = [25, 50, 75, 100, 125, 150]

export const XP_VALUES = {
  prayerDone:         50,
  taskDone:           30,
  lcProblemSolved:    25,
  timerMinute:         1,
  dayCompleted:      200,
  streakBonus:        50,
  springTopicDone:    40,
  dbTopicDone:        35,
}

export const SPRING_GROUP_ORDER = [
  'Java Core',
  'Spring Core',
  'Spring Boot',
  'REST APIs',
  'Spring Data JPA',
  'Security',
  'Caching',
  'Async & Messaging',
  'Microservices',
  'AI Integration',
  'Testing',
  'Performance',
  'DevOps',
  'Interview Theory',
]

export const DB_GROUP_ORDER = [
  'SQL Fundamentals',
  'Joins',
  'Window Functions',
  'CTEs & Advanced',
  'Schema Design',
  'Indexing',
  'Transactions',
  'Performance',
  'PostgreSQL',
  'Theory',
  'NoSQL',
  'Migrations & Ops',
]

export const SPRING_MILESTONES = [10, 25, 50, 75, 89]

export const SPRING_MILESTONE_MESSAGES = {
  10: 'First 10 Spring topics done. The beans are awakening.',
  25: '25 Spring topics. You understand IoC now. That\'s the key.',
  50: 'Halfway through Spring Boot. You\'re becoming dangerous.',
  75: 'Spring master in progress. 14 topics left.',
  89: 'Spring Boot complete. ما شاء الله — you know this stack.',
}

export const DB_MILESTONES = [10, 25, 50, 74]

export const DB_MILESTONE_MESSAGES = {
  10: '10 DB topics. You can write real queries now.',
  25: '25 topics. Joins, aggregates, indexes — you\'re solid.',
  50: '50 DB topics. You\'re thinking in relational models.',
  74: 'Database complete. You understand the full stack now.',
}

export const SPRING_BOOT_TOPICS = [
  // ── JAVA CORE FUNDAMENTALS (prerequisite) ─────────────────────
  { id: 1,  title: 'OOP Principles',                    group: 'Java Core',         difficulty: 'Fundamental',   description: 'Encapsulation, Inheritance, Polymorphism, Abstraction — with real Spring examples',                     resource: 'https://www.baeldung.com/java-oop' },
  { id: 2,  title: 'Interfaces vs Abstract Classes',    group: 'Java Core',         difficulty: 'Fundamental',   description: 'When to use each, default methods, functional interfaces',                                           resource: 'https://www.baeldung.com/java-interface-vs-abstract-class' },
  { id: 3,  title: 'Java Collections Framework',        group: 'Java Core',         difficulty: 'Fundamental',   description: 'List, Set, Map, Queue — internals of HashMap, ArrayList, LinkedList',                               resource: 'https://docs.oracle.com/javase/tutorial/collections/' },
  { id: 4,  title: 'Generics',                          group: 'Java Core',         difficulty: 'Fundamental',   description: 'Type parameters, wildcards, bounded types — used heavily in Spring Data',                           resource: 'https://www.baeldung.com/java-generics' },
  { id: 5,  title: 'Exception Handling',                group: 'Java Core',         difficulty: 'Fundamental',   description: 'Checked vs unchecked, custom exceptions, @ControllerAdvice in Spring',                             resource: 'https://www.baeldung.com/exception-handling-for-rest-with-spring' },
  { id: 6,  title: 'Streams & Functional Programming',  group: 'Java Core',         difficulty: 'Intermediate',  description: 'map, filter, reduce, collectors — used in service layers constantly',                               resource: 'https://www.baeldung.com/java-8-streams' },
  { id: 7,  title: 'Optional',                          group: 'Java Core',         difficulty: 'Fundamental',   description: 'Avoiding NullPointerException, orElse/orElseGet/map chains',                                       resource: 'https://www.baeldung.com/java-optional' },
  { id: 8,  title: 'Concurrency & Threads',             group: 'Java Core',         difficulty: 'Advanced',      description: 'Thread lifecycle, synchronized, volatile, Executor framework',                                     resource: 'https://www.baeldung.com/java-concurrency' },
  { id: 9,  title: 'Memory Model & Garbage Collection', group: 'Java Core',         difficulty: 'Advanced',      description: 'Heap/stack, GC algorithms, memory leaks in Spring beans',                                         resource: 'https://www.baeldung.com/jvm-garbage-collectors' },

  // ── SPRING CORE ───────────────────────────────────────────────
  { id: 10, title: 'IoC Container & Dependency Injection', group: 'Spring Core',   difficulty: 'Fundamental',   description: 'ApplicationContext, BeanFactory, constructor vs field vs setter injection',                         resource: 'https://docs.spring.io/spring-framework/docs/current/reference/html/core.html' },
  { id: 11, title: 'Bean Lifecycle',                    group: 'Spring Core',       difficulty: 'Fundamental',   description: '@PostConstruct, @PreDestroy, InitializingBean, BeanPostProcessor',                                  resource: 'https://www.baeldung.com/spring-bean-lifecycle' },
  { id: 12, title: 'Bean Scopes',                       group: 'Spring Core',       difficulty: 'Fundamental',   description: 'Singleton, Prototype, Request, Session — when each applies',                                       resource: 'https://www.baeldung.com/spring-bean-scopes' },
  { id: 13, title: '@Component, @Service, @Repository, @Controller', group: 'Spring Core', difficulty: 'Fundamental', description: 'Stereotype annotations and their semantic differences',                              resource: 'https://www.baeldung.com/spring-component-repository-service' },
  { id: 14, title: 'Configuration Classes (@Configuration, @Bean)', group: 'Spring Core', difficulty: 'Fundamental', description: 'Java-based configuration vs XML, conditional beans',                                  resource: 'https://www.baeldung.com/spring-configuration-annotation' },
  { id: 15, title: 'Spring Profiles',                   group: 'Spring Core',       difficulty: 'Intermediate',  description: '@Profile, application-{env}.yml, activating profiles per environment',                            resource: 'https://www.baeldung.com/spring-profiles' },
  { id: 16, title: 'AOP — Aspect Oriented Programming', group: 'Spring Core',       difficulty: 'Intermediate',  description: '@Aspect, @Around, @Before, @After, pointcuts — logging, security, transactions',                  resource: 'https://www.baeldung.com/spring-aop' },
  { id: 17, title: 'Spring Events',                     group: 'Spring Core',       difficulty: 'Intermediate',  description: 'ApplicationEvent, @EventListener, async events for decoupling',                                   resource: 'https://www.baeldung.com/spring-events' },

  // ── SPRING BOOT ───────────────────────────────────────────────
  { id: 18, title: 'Auto-Configuration',                group: 'Spring Boot',       difficulty: 'Fundamental',   description: 'How @SpringBootApplication works, @EnableAutoConfiguration, spring.factories',                    resource: 'https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.auto-configuration' },
  { id: 19, title: 'application.yml / application.properties', group: 'Spring Boot', difficulty: 'Fundamental', description: '@Value, @ConfigurationProperties, environment-specific configs',                                   resource: 'https://www.baeldung.com/spring-boot-configuration-metadata' },
  { id: 20, title: 'Embedded Server (Tomcat/Netty)',    group: 'Spring Boot',       difficulty: 'Fundamental',   description: 'How embedded servers work, switching to Undertow, server.port config',                            resource: 'https://www.baeldung.com/spring-boot-change-server' },
  { id: 21, title: 'Spring Boot Actuator',              group: 'Spring Boot',       difficulty: 'Intermediate',  description: '/health, /metrics, /info, /env — production monitoring essentials',                               resource: 'https://www.baeldung.com/spring-boot-actuators' },
  { id: 22, title: 'Spring Boot Starters',              group: 'Spring Boot',       difficulty: 'Fundamental',   description: 'How starters work, creating custom starters, dependency management',                              resource: 'https://www.baeldung.com/spring-boot-starters' },
  { id: 23, title: 'DevTools & Hot Reload',             group: 'Spring Boot',       difficulty: 'Fundamental',   description: 'spring-boot-devtools, LiveReload, classpath monitoring',                                         resource: 'https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.devtools' },

  // ── REST API DESIGN ───────────────────────────────────────────
  { id: 24, title: 'RESTful API Design Principles',     group: 'REST APIs',         difficulty: 'Fundamental',   description: 'Resource naming, HTTP verbs, statelessness, HATEOAS basics',                                      resource: 'https://restfulapi.net/' },
  { id: 25, title: '@RestController & Request Mapping', group: 'REST APIs',         difficulty: 'Fundamental',   description: '@GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping',                          resource: 'https://www.baeldung.com/spring-controller-vs-restcontroller' },
  { id: 26, title: 'Request & Response Bodies',         group: 'REST APIs',         difficulty: 'Fundamental',   description: '@RequestBody, @ResponseBody, @PathVariable, @RequestParam, @RequestHeader',                      resource: 'https://www.baeldung.com/spring-request-response-body' },
  { id: 27, title: 'DTOs & MapStruct / ModelMapper',    group: 'REST APIs',         difficulty: 'Intermediate',  description: 'Data Transfer Objects, why not expose entities, mapping libraries',                               resource: 'https://www.baeldung.com/mapstruct' },
  { id: 28, title: 'ResponseEntity & HTTP Status Codes',group: 'REST APIs',         difficulty: 'Fundamental',   description: 'Proper status codes: 200/201/204/400/401/403/404/409/500',                                       resource: 'https://www.baeldung.com/spring-response-entity' },
  { id: 29, title: 'Global Exception Handling',         group: 'REST APIs',         difficulty: 'Intermediate',  description: '@ControllerAdvice, @ExceptionHandler, ProblemDetail (RFC 7807)',                                  resource: 'https://www.baeldung.com/exception-handling-for-rest-with-spring' },
  { id: 30, title: 'API Versioning Strategies',         group: 'REST APIs',         difficulty: 'Intermediate',  description: 'URI versioning, header versioning, content negotiation — pros/cons',                             resource: 'https://www.baeldung.com/rest-versioning' },
  { id: 31, title: 'Bean Validation (Jakarta)',         group: 'REST APIs',         difficulty: 'Intermediate',  description: '@Valid, @NotNull, @Size, @Email, custom validators, @Validated on services',                     resource: 'https://www.baeldung.com/spring-boot-bean-validation' },
  { id: 32, title: 'HATEOAS',                           group: 'REST APIs',         difficulty: 'Advanced',      description: 'Hypermedia links, EntityModel, CollectionModel, Spring HATEOAS library',                         resource: 'https://www.baeldung.com/spring-hateoas-tutorial' },
  { id: 33, title: 'API Documentation (Springdoc/Swagger)', group: 'REST APIs',    difficulty: 'Intermediate',  description: 'springdoc-openapi, @Operation, @Schema, Swagger UI auto-generation',                             resource: 'https://springdoc.org/' },
  { id: 34, title: 'Pagination & Sorting',              group: 'REST APIs',         difficulty: 'Intermediate',  description: 'Pageable, Page<T>, PageRequest, sorting params from requests',                                   resource: 'https://www.baeldung.com/rest-api-pagination-in-spring' },

  // ── SPRING DATA JPA ───────────────────────────────────────────
  { id: 35, title: 'JPA & Hibernate Basics',            group: 'Spring Data JPA',   difficulty: 'Fundamental',   description: '@Entity, @Table, @Id, @GeneratedValue, @Column — ORM fundamentals',                              resource: 'https://www.baeldung.com/the-persistence-layer-with-spring-and-jpa' },
  { id: 36, title: 'Entity Relationships',              group: 'Spring Data JPA',   difficulty: 'Intermediate',  description: '@OneToOne, @OneToMany, @ManyToMany, @ManyToOne — fetch types, cascade',                         resource: 'https://www.baeldung.com/hibernate-one-to-many' },
  { id: 37, title: 'Repository Pattern',                group: 'Spring Data JPA',   difficulty: 'Fundamental',   description: 'JpaRepository, CrudRepository, PagingAndSortingRepository',                                      resource: 'https://www.baeldung.com/spring-data-repositories' },
  { id: 38, title: 'Derived Query Methods',             group: 'Spring Data JPA',   difficulty: 'Fundamental',   description: 'findByEmailAndStatus, findByAgeGreaterThan, countBy... naming conventions',                      resource: 'https://www.baeldung.com/spring-data-derived-queries' },
  { id: 39, title: '@Query (JPQL & Native SQL)',         group: 'Spring Data JPA',   difficulty: 'Intermediate',  description: 'Custom queries, named parameters, native queries, @Modifying',                                   resource: 'https://www.baeldung.com/spring-data-jpa-query' },
  { id: 40, title: 'Transactions (@Transactional)',     group: 'Spring Data JPA',   difficulty: 'Intermediate',  description: 'Propagation levels, isolation levels, rollback rules, readOnly optimization',                    resource: 'https://www.baeldung.com/transaction-configuration-with-jpa-and-spring' },
  { id: 41, title: 'N+1 Problem & Fetch Strategies',   group: 'Spring Data JPA',   difficulty: 'Advanced',      description: 'LAZY vs EAGER, JOIN FETCH, @EntityGraph, batch fetching solutions',                              resource: 'https://www.baeldung.com/hibernate-common-performance-problems-in-logs' },
  { id: 42, title: 'Projections & DTOs in Queries',    group: 'Spring Data JPA',   difficulty: 'Intermediate',  description: 'Interface projections, class-based projections, JPQL constructor expressions',                   resource: 'https://www.baeldung.com/spring-data-jpa-projections' },
  { id: 43, title: 'Auditing (@CreatedDate, @LastModifiedDate)', group: 'Spring Data JPA', difficulty: 'Intermediate', description: '@EnableJpaAuditing, AuditorAware, auto-timestamp fields',                              resource: 'https://www.baeldung.com/database-auditing-jpa' },
  { id: 44, title: 'Specifications (Criteria API)',     group: 'Spring Data JPA',   difficulty: 'Advanced',      description: 'Dynamic queries, Specification<T>, JpaSpecificationExecutor',                                   resource: 'https://www.baeldung.com/rest-api-search-language-spring-data-specifications' },
  { id: 45, title: 'Database Migrations (Flyway/Liquibase)', group: 'Spring Data JPA', difficulty: 'Intermediate', description: 'Version-controlled schema changes, migration files, rollback',                               resource: 'https://www.baeldung.com/database-migrations-with-flyway' },

  // ── SECURITY ─────────────────────────────────────────────────
  { id: 46, title: 'Spring Security Architecture',      group: 'Security',          difficulty: 'Intermediate',  description: 'SecurityFilterChain, AuthenticationManager, SecurityContext — how the filter chain works',       resource: 'https://docs.spring.io/spring-security/reference/servlet/architecture.html' },
  { id: 47, title: 'JWT Authentication',                group: 'Security',          difficulty: 'Intermediate',  description: 'Stateless auth, token structure, signing, validation, refresh tokens',                          resource: 'https://www.baeldung.com/spring-security-oauth-jwt' },
  { id: 48, title: 'OAuth 2.0 & OpenID Connect',        group: 'Security',          difficulty: 'Advanced',      description: 'Authorization Code flow, client credentials, resource server config',                           resource: 'https://www.baeldung.com/spring-security-oauth' },
  { id: 49, title: 'Role-Based Access Control (RBAC)',  group: 'Security',          difficulty: 'Intermediate',  description: '@PreAuthorize, @Secured, hasRole, method-level security',                                       resource: 'https://www.baeldung.com/spring-security-method-security' },
  { id: 50, title: 'Password Encoding (BCrypt)',        group: 'Security',          difficulty: 'Fundamental',   description: 'PasswordEncoder, BCryptPasswordEncoder, why never store plain text',                            resource: 'https://www.baeldung.com/spring-security-registration-password-encoding-bcrypt' },
  { id: 51, title: 'CORS Configuration',                group: 'Security',          difficulty: 'Intermediate',  description: '@CrossOrigin, WebMvcConfigurer, CorsFilter — for React frontends',                             resource: 'https://www.baeldung.com/spring-cors' },
  { id: 52, title: 'CSRF Protection',                   group: 'Security',          difficulty: 'Intermediate',  description: 'When to disable CSRF (stateless APIs), when to keep it (form-based)',                           resource: 'https://www.baeldung.com/spring-security-csrf' },

  // ── CACHING ───────────────────────────────────────────────────
  { id: 53, title: 'Spring Cache Abstraction',          group: 'Caching',           difficulty: 'Intermediate',  description: '@Cacheable, @CacheEvict, @CachePut, @EnableCaching, cache managers',                            resource: 'https://www.baeldung.com/spring-cache-tutorial' },
  { id: 54, title: 'Redis Integration',                 group: 'Caching',           difficulty: 'Intermediate',  description: 'RedisTemplate, Spring Data Redis, cache-aside pattern, TTL',                                    resource: 'https://www.baeldung.com/spring-data-redis-tutorial' },
  { id: 55, title: 'Cache Strategies',                  group: 'Caching',           difficulty: 'Advanced',      description: 'Cache-aside, write-through, write-behind, cache invalidation problems',                        resource: 'https://codeahoy.com/2017/08/11/caching-strategies-and-how-to-choose-the-right-one/' },

  // ── ASYNC & MESSAGING ─────────────────────────────────────────
  { id: 56, title: '@Async & ThreadPoolTaskExecutor',   group: 'Async & Messaging', difficulty: 'Intermediate',  description: 'Async method execution, thread pool config, CompletableFuture return types',                    resource: 'https://www.baeldung.com/spring-async' },
  { id: 57, title: '@Scheduled Tasks',                  group: 'Async & Messaging', difficulty: 'Fundamental',   description: '@EnableScheduling, cron expressions, fixedRate, fixedDelay',                                   resource: 'https://www.baeldung.com/spring-scheduled-tasks' },
  { id: 58, title: 'Spring Events (Async)',              group: 'Async & Messaging', difficulty: 'Intermediate',  description: '@Async on @EventListener, ApplicationEventPublisher, decoupled modules',                       resource: 'https://www.baeldung.com/spring-events' },
  { id: 59, title: 'Kafka Integration (Spring Kafka)',  group: 'Async & Messaging', difficulty: 'Advanced',      description: '@KafkaListener, KafkaTemplate, consumer groups, offset management',                            resource: 'https://www.baeldung.com/spring-kafka' },
  { id: 60, title: 'RabbitMQ / Spring AMQP',           group: 'Async & Messaging', difficulty: 'Advanced',      description: 'Exchanges, queues, bindings, @RabbitListener, message acknowledgement',                        resource: 'https://www.baeldung.com/spring-amqp' },

  // ── MICROSERVICES ─────────────────────────────────────────────
  { id: 61, title: 'Microservices Architecture Patterns', group: 'Microservices',  difficulty: 'Advanced',      description: 'Decomposition, API gateway, service discovery, circuit breaker, saga pattern',                  resource: 'https://microservices.io/patterns/index.html' },
  { id: 62, title: 'Spring Cloud Config',               group: 'Microservices',     difficulty: 'Advanced',      description: 'Centralized config server, config client, Git backend, refresh scope',                         resource: 'https://www.baeldung.com/spring-cloud-configuration' },
  { id: 63, title: 'Service Discovery (Eureka)',        group: 'Microservices',     difficulty: 'Advanced',      description: 'Eureka server/client, registration, heartbeats, client-side load balancing',                   resource: 'https://www.baeldung.com/spring-cloud-netflix-eureka' },
  { id: 64, title: 'API Gateway (Spring Cloud Gateway)',group: 'Microservices',     difficulty: 'Advanced',      description: 'Routing, rate limiting, circuit breaking at gateway level',                                    resource: 'https://www.baeldung.com/spring-cloud-gateway' },
  { id: 65, title: 'Circuit Breaker (Resilience4j)',   group: 'Microservices',     difficulty: 'Advanced',      description: 'Circuit breaker, retry, rate limiter, bulkhead — fault tolerance patterns',                    resource: 'https://www.baeldung.com/resilience4j' },
  { id: 66, title: 'Feign Client (Inter-service HTTP)', group: 'Microservices',    difficulty: 'Advanced',      description: 'Declarative REST client, load balancing, fallbacks',                                           resource: 'https://www.baeldung.com/spring-cloud-openfeign' },

  // ── AI INTEGRATION (Umer's Spring Boot + AI project) ──────────
  { id: 67, title: 'Spring AI Framework',               group: 'AI Integration',    difficulty: 'Intermediate',  description: 'ChatClient, PromptTemplate, VectorStore, EmbeddingModel — Spring AI basics',                   resource: 'https://docs.spring.io/spring-ai/reference/' },
  { id: 68, title: 'OpenAI / Gemini API Integration',   group: 'AI Integration',    difficulty: 'Intermediate',  description: 'REST client calls to LLM APIs, API key management, token limits',                              resource: 'https://www.baeldung.com/spring-ai-openai-chat' },
  { id: 69, title: 'RAG (Retrieval Augmented Generation)', group: 'AI Integration', difficulty: 'Advanced',     description: 'Vector embeddings, similarity search, context injection into prompts',                         resource: 'https://docs.spring.io/spring-ai/reference/api/retrieval-augmented-generation.html' },
  { id: 70, title: 'LangChain4j with Spring Boot',      group: 'AI Integration',    difficulty: 'Advanced',      description: 'AI services, tools, memory, chains — Java alternative to Python LangChain',                   resource: 'https://docs.langchain4j.dev/integrations/frameworks/spring-boot' },

  // ── TESTING ───────────────────────────────────────────────────
  { id: 71, title: 'Unit Testing with JUnit 5 & Mockito', group: 'Testing',        difficulty: 'Fundamental',   description: '@Test, @Mock, @InjectMocks, when/thenReturn, verify — test service layer',                     resource: 'https://www.baeldung.com/mockito-series' },
  { id: 72, title: 'Integration Testing (@SpringBootTest)', group: 'Testing',      difficulty: 'Intermediate',  description: '@SpringBootTest, @AutoConfigureMockMvc, TestRestTemplate, test slices',                        resource: 'https://www.baeldung.com/spring-boot-testing' },
  { id: 73, title: 'Repository Testing (@DataJpaTest)', group: 'Testing',          difficulty: 'Intermediate',  description: 'In-memory DB testing, @DataJpaTest, H2, test transactions',                                    resource: 'https://www.baeldung.com/spring-boot-testing-embedded-database' },
  { id: 74, title: 'MockMvc (Controller Testing)',       group: 'Testing',          difficulty: 'Intermediate',  description: 'Testing REST endpoints, MockMvcRequestBuilders, status matchers, JSON assertions',             resource: 'https://www.baeldung.com/integration-testing-in-spring' },
  { id: 75, title: 'Testcontainers',                    group: 'Testing',           difficulty: 'Advanced',      description: 'Real DB in tests, PostgreSQL container, Redis container — no mocking',                        resource: 'https://www.baeldung.com/spring-boot-testcontainers-integration-test' },

  // ── PERFORMANCE & PRODUCTION ──────────────────────────────────
  { id: 76, title: 'Connection Pooling (HikariCP)',     group: 'Performance',       difficulty: 'Intermediate',  description: 'Pool sizing, timeout config, leak detection — Spring Boot default pool',                      resource: 'https://www.baeldung.com/hikaricp' },
  { id: 77, title: 'JVM Tuning for Production',         group: 'Performance',       difficulty: 'Advanced',      description: 'Heap size flags, GC selection, profiling with VisualVM, memory analysis',                    resource: 'https://www.baeldung.com/jvm-parameters' },
  { id: 78, title: 'Logging (SLF4J + Logback)',         group: 'Performance',       difficulty: 'Fundamental',   description: 'Log levels, MDC for request tracing, structured logging, log rotation',                      resource: 'https://www.baeldung.com/logback' },
  { id: 79, title: 'Health Checks & Readiness Probes',  group: 'Performance',       difficulty: 'Intermediate',  description: 'Custom HealthIndicators, Kubernetes readiness/liveness, Actuator /health',                    resource: 'https://www.baeldung.com/spring-liveness-readiness-probes' },

  // ── DEVOPS & DEPLOYMENT ───────────────────────────────────────
  { id: 80, title: 'Dockerizing Spring Boot',           group: 'DevOps',            difficulty: 'Intermediate',  description: 'Multi-stage Dockerfile, layered JARs, .dockerignore, image optimization',                     resource: 'https://spring.io/guides/topicals/spring-boot-docker' },
  { id: 81, title: 'Docker Compose for Local Dev',      group: 'DevOps',            difficulty: 'Intermediate',  description: 'App + DB + Redis compose setup, environment variables, volumes',                              resource: 'https://www.baeldung.com/ops/docker-compose' },
  { id: 82, title: 'CI/CD with GitHub Actions',         group: 'DevOps',            difficulty: 'Intermediate',  description: 'Build, test, containerize, deploy pipeline — YAML workflow files',                            resource: 'https://docs.github.com/en/actions/publishing-packages/publishing-docker-images' },
  { id: 83, title: 'AWS Deployment (EC2 / ECS)',        group: 'DevOps',            difficulty: 'Advanced',      description: 'EC2 with JAR, ECS with Docker, environment variables, security groups',                       resource: 'https://www.baeldung.com/spring-boot-deploy-aws-beanstalk' },
  { id: 84, title: 'AWS Lambda (Spring Cloud Function)',group: 'DevOps',            difficulty: 'Advanced',      description: 'Serverless Spring Boot, cold starts, function adapter, SAM deployment',                       resource: 'https://www.baeldung.com/spring-cloud-function' },

  // ── INTERVIEW-SPECIFIC THEORY ─────────────────────────────────
  { id: 85, title: 'How Spring MVC Processes a Request', group: 'Interview Theory', difficulty: 'Fundamental',   description: 'DispatcherServlet → HandlerMapping → Controller → ViewResolver — draw this from memory',        resource: 'https://www.baeldung.com/spring-mvc-tutorial' },
  { id: 86, title: 'Singleton Beans & Thread Safety',   group: 'Interview Theory',  difficulty: 'Intermediate',  description: 'Why singleton beans can cause bugs, stateless design, ThreadLocal',                           resource: 'https://www.baeldung.com/spring-singleton-concurrent-requests' },
  { id: 87, title: 'Circular Dependency Problem',       group: 'Interview Theory',  difficulty: 'Intermediate',  description: 'Why it happens, how to break it — @Lazy, setter injection, redesign',                        resource: 'https://www.baeldung.com/circular-dependencies-in-spring' },
  { id: 88, title: 'Spring vs Spring Boot vs Spring MVC', group: 'Interview Theory', difficulty: 'Fundamental', description: 'Explain the relationship clearly — common interview opener',                                  resource: 'https://www.baeldung.com/spring-vs-spring-mvc-vs-spring-boot' },
  { id: 89, title: 'Idempotency in REST APIs',          group: 'Interview Theory',  difficulty: 'Intermediate',  description: 'Which methods are idempotent, why it matters, idempotency keys',                              resource: 'https://www.restapitutorial.com/lessons/idempotency.html' },
]

export const DATABASE_TOPICS = [
  // ── SQL FUNDAMENTALS ──────────────────────────────────────────
  { id: 1,  title: 'SELECT, WHERE, ORDER BY, LIMIT',    group: 'SQL Fundamentals',  difficulty: 'Fundamental',   description: 'Basic retrieval — filtering, sorting, pagination with LIMIT/OFFSET',                          resource: 'https://sqlzoo.net/wiki/SELECT_basics' },
  { id: 2,  title: 'INSERT, UPDATE, DELETE',            group: 'SQL Fundamentals',  difficulty: 'Fundamental',   description: 'DML operations, WHERE clause safety, affected rows',                                         resource: 'https://www.w3schools.com/sql/sql_insert.asp' },
  { id: 3,  title: 'NULL handling (IS NULL, COALESCE)', group: 'SQL Fundamentals',  difficulty: 'Fundamental',   description: 'Three-valued logic, COALESCE, NULLIF, NVL — NULLs break comparisons',                        resource: 'https://www.sqlshack.com/understanding-null-values-in-sql-server/' },
  { id: 4,  title: 'Aggregate Functions',               group: 'SQL Fundamentals',  difficulty: 'Fundamental',   description: 'COUNT, SUM, AVG, MIN, MAX — with and without GROUP BY',                                      resource: 'https://www.w3schools.com/sql/sql_count_avg_sum.asp' },
  { id: 5,  title: 'GROUP BY & HAVING',                 group: 'SQL Fundamentals',  difficulty: 'Fundamental',   description: 'Grouping rows, filtering groups with HAVING vs WHERE',                                       resource: 'https://www.w3schools.com/sql/sql_groupby.asp' },
  { id: 6,  title: 'DISTINCT & CASE WHEN',              group: 'SQL Fundamentals',  difficulty: 'Fundamental',   description: 'Removing duplicates, conditional expressions, CASE in SELECT and WHERE',                     resource: 'https://www.w3schools.com/sql/sql_distinct.asp' },
  { id: 7,  title: 'String Functions',                  group: 'SQL Fundamentals',  difficulty: 'Fundamental',   description: 'CONCAT, UPPER, LOWER, SUBSTRING, TRIM, LIKE, ILIKE, wildcards',                             resource: 'https://www.postgresql.org/docs/current/functions-string.html' },
  { id: 8,  title: 'Date & Time Functions',             group: 'SQL Fundamentals',  difficulty: 'Fundamental',   description: 'NOW(), CURRENT_DATE, DATE_TRUNC, EXTRACT, INTERVAL, timezone handling',                     resource: 'https://www.postgresql.org/docs/current/functions-datetime.html' },
  { id: 9,  title: 'UNION, INTERSECT, EXCEPT',         group: 'SQL Fundamentals',  difficulty: 'Intermediate',  description: 'Set operations on result sets, UNION vs UNION ALL (duplicates)',                              resource: 'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-union/' },
  { id: 10, title: 'Subqueries (Scalar, Correlated)',   group: 'SQL Fundamentals',  difficulty: 'Intermediate',  description: 'Subqueries in SELECT/WHERE/FROM, correlated subqueries, EXISTS/NOT EXISTS',                  resource: 'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-subquery/' },

  // ── JOINS ─────────────────────────────────────────────────────
  { id: 11, title: 'INNER JOIN',                        group: 'Joins',             difficulty: 'Fundamental',   description: 'Returns matching rows from both tables — the most common join',                              resource: 'https://www.w3schools.com/sql/sql_join_inner.asp' },
  { id: 12, title: 'LEFT JOIN & RIGHT JOIN',            group: 'Joins',             difficulty: 'Fundamental',   description: 'All rows from one side, NULL for non-matches on the other',                                 resource: 'https://www.w3schools.com/sql/sql_join_left.asp' },
  { id: 13, title: 'FULL OUTER JOIN',                   group: 'Joins',             difficulty: 'Intermediate',  description: 'All rows from both sides, NULLs where no match — finding missing data',                    resource: 'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-full-outer-join/' },
  { id: 14, title: 'CROSS JOIN & SELF JOIN',            group: 'Joins',             difficulty: 'Intermediate',  description: 'Cartesian product, self-referencing tables (employee/manager)',                              resource: 'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-self-join/' },
  { id: 15, title: 'Multi-table Joins',                 group: 'Joins',             difficulty: 'Intermediate',  description: 'Joining 3+ tables, join order, aliases, avoiding ambiguous columns',                        resource: 'https://www.sqlshack.com/sql-multiple-joins-for-beginners-with-examples/' },
  { id: 16, title: 'JOIN vs Subquery performance',      group: 'Joins',             difficulty: 'Advanced',      description: 'When joins outperform subqueries, optimizer behavior, correlated subquery cost',             resource: 'https://use-the-index-luke.com/sql/join' },

  // ── WINDOW FUNCTIONS ──────────────────────────────────────────
  { id: 17, title: 'ROW_NUMBER, RANK, DENSE_RANK',      group: 'Window Functions',  difficulty: 'Intermediate',  description: 'Ranking within partitions — top-N per group, deduplication',                                resource: 'https://www.postgresqltutorial.com/postgresql-window-function/postgresql-row_number/' },
  { id: 18, title: 'LAG & LEAD',                        group: 'Window Functions',  difficulty: 'Intermediate',  description: 'Accessing previous/next row values — running differences, detecting gaps',                   resource: 'https://www.postgresqltutorial.com/postgresql-window-function/postgresql-lag-function/' },
  { id: 19, title: 'SUM, AVG, COUNT OVER ()',           group: 'Window Functions',  difficulty: 'Intermediate',  description: 'Running totals, moving averages, cumulative counts with OVER clause',                       resource: 'https://www.postgresqltutorial.com/postgresql-window-function/' },
  { id: 20, title: 'PARTITION BY & FRAME Clause',       group: 'Window Functions',  difficulty: 'Advanced',      description: 'ROWS BETWEEN, RANGE BETWEEN, UNBOUNDED PRECEDING — precise frame control',                  resource: 'https://www.postgresql.org/docs/current/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS' },
  { id: 21, title: 'FIRST_VALUE, LAST_VALUE, NTH_VALUE',group: 'Window Functions',  difficulty: 'Advanced',      description: 'Value functions, frame boundary gotchas with LAST_VALUE',                                   resource: 'https://www.postgresqltutorial.com/postgresql-window-function/postgresql-first_value/' },
  { id: 22, title: 'NTILE & PERCENT_RANK',              group: 'Window Functions',  difficulty: 'Advanced',      description: 'Bucketing rows, percentile calculations, distribution analysis',                             resource: 'https://www.postgresqltutorial.com/postgresql-window-function/postgresql-ntile-function/' },

  // ── CTEs & ADVANCED QUERIES ───────────────────────────────────
  { id: 23, title: 'Common Table Expressions (WITH)',   group: 'CTEs & Advanced',   difficulty: 'Intermediate',  description: 'Named temporary result sets, readability over subqueries, multiple CTEs',                    resource: 'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-cte/' },
  { id: 24, title: 'Recursive CTEs',                    group: 'CTEs & Advanced',   difficulty: 'Advanced',      description: 'Hierarchical data, org charts, BFS/DFS in SQL, anchor + recursive member',                  resource: 'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-recursive-query/' },
  { id: 25, title: 'Materialized Views',                group: 'CTEs & Advanced',   difficulty: 'Intermediate',  description: 'Cached query results, REFRESH MATERIALIZED VIEW, when to use vs regular views',             resource: 'https://www.postgresqltutorial.com/postgresql-views/postgresql-materialized-views/' },
  { id: 26, title: 'Views',                             group: 'CTEs & Advanced',   difficulty: 'Fundamental',   description: 'Virtual tables, encapsulating complex queries, updatable views',                             resource: 'https://www.postgresqltutorial.com/postgresql-views/' },
  { id: 27, title: 'Lateral Joins',                     group: 'CTEs & Advanced',   difficulty: 'Advanced',      description: 'LATERAL keyword, correlated subquery in FROM, top-N per group pattern',                    resource: 'https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-LATERAL' },

  // ── SCHEMA DESIGN ─────────────────────────────────────────────
  { id: 28, title: 'Normalization (1NF, 2NF, 3NF, BCNF)',group: 'Schema Design',   difficulty: 'Fundamental',   description: 'Eliminating redundancy, functional dependencies — with examples',                           resource: 'https://www.guru99.com/database-normalization.html' },
  { id: 29, title: 'Denormalization & Trade-offs',      group: 'Schema Design',     difficulty: 'Intermediate',  description: 'When to deliberately denormalize for read performance, materialized columns',               resource: 'https://www.vertabelo.com/blog/denormalization-when-why-and-how/' },
  { id: 30, title: 'Primary Keys & Surrogate Keys',     group: 'Schema Design',     difficulty: 'Fundamental',   description: 'SERIAL vs UUID vs BIGSERIAL, natural vs surrogate keys, UUID v4 vs v7',                    resource: 'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-primary-key/' },
  { id: 31, title: 'Foreign Keys & Referential Integrity', group: 'Schema Design',  difficulty: 'Fundamental',   description: 'ON DELETE CASCADE/RESTRICT/SET NULL, circular FK problems',                                resource: 'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-foreign-key/' },
  { id: 32, title: 'Constraints (UNIQUE, CHECK, NOT NULL)', group: 'Schema Design', difficulty: 'Fundamental',   description: 'Enforcing data quality at DB level, partial unique indexes',                                resource: 'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-check-constraint/' },
  { id: 33, title: 'Many-to-Many Junction Tables',      group: 'Schema Design',     difficulty: 'Fundamental',   description: 'Association tables, composite PKs vs surrogate keys, extra columns on junction',            resource: 'https://www.vertabelo.com/blog/many-to-many-relationship/' },
  { id: 34, title: 'Soft Deletes (deleted_at pattern)', group: 'Schema Design',     difficulty: 'Intermediate',  description: 'is_deleted flag vs deleted_at timestamp, filtering in queries, indexes',                   resource: 'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-delete/' },
  { id: 35, title: 'Polymorphic Relationships',         group: 'Schema Design',     difficulty: 'Advanced',      description: 'entity_type + entity_id pattern, STI vs CTI, JSON columns for flex schema',                resource: 'https://hashrocket.com/blog/posts/modeling-polymorphic-associations-in-a-relational-database' },
  { id: 36, title: 'Temporal Tables & History Tracking', group: 'Schema Design',   difficulty: 'Advanced',       description: 'Audit tables, valid_from/valid_to, bi-temporal modeling',                                  resource: 'https://www.vertabelo.com/blog/temporal-tables-and-time-travel-queries-in-postgresql/' },

  // ── INDEXING ─────────────────────────────────────────────────
  { id: 37, title: 'B-Tree Index Internals',            group: 'Indexing',          difficulty: 'Intermediate',  description: 'How B-tree indexes work, why they help SELECT but slow INSERT/UPDATE',                      resource: 'https://use-the-index-luke.com/sql/anatomy' },
  { id: 38, title: 'Composite Indexes & Column Order',  group: 'Indexing',          difficulty: 'Intermediate',  description: 'Left-prefix rule, column order matters, index selectivity',                                 resource: 'https://use-the-index-luke.com/sql/where-clause/the-equals-operator/concatenated-keys' },
  { id: 39, title: 'Partial Indexes',                   group: 'Indexing',          difficulty: 'Intermediate',  description: 'Index on subset of rows (WHERE clause on index), smaller + faster',                        resource: 'https://www.postgresql.org/docs/current/indexes-partial.html' },
  { id: 40, title: 'Covering Indexes (Index-only scans)',group: 'Indexing',         difficulty: 'Advanced',      description: 'INCLUDE columns, avoiding heap access, index-only scan conditions',                        resource: 'https://use-the-index-luke.com/sql/clustering/index-only-scan-covering-index' },
  { id: 41, title: 'Hash, GIN, GiST, BRIN Indexes',   group: 'Indexing',          difficulty: 'Advanced',      description: 'Specialized index types — full-text search (GIN), geometric (GiST), large tables (BRIN)',   resource: 'https://www.postgresql.org/docs/current/indexes-types.html' },
  { id: 42, title: 'Index Bloat & VACUUM',              group: 'Indexing',          difficulty: 'Advanced',      description: 'Dead tuples, autovacuum, manual VACUUM ANALYZE, monitoring bloat',                        resource: 'https://www.postgresql.org/docs/current/routine-vacuuming.html' },
  { id: 43, title: 'EXPLAIN & EXPLAIN ANALYZE',         group: 'Indexing',          difficulty: 'Intermediate',  description: 'Reading query plans, Seq Scan vs Index Scan, cost estimates, actual rows',                 resource: 'https://www.postgresql.org/docs/current/sql-explain.html' },

  // ── TRANSACTIONS & CONCURRENCY ────────────────────────────────
  { id: 44, title: 'ACID Properties',                   group: 'Transactions',      difficulty: 'Fundamental',   description: 'Atomicity, Consistency, Isolation, Durability — with concrete examples',                    resource: 'https://www.postgresql.org/docs/current/transaction-iso.html' },
  { id: 45, title: 'Transaction Isolation Levels',      group: 'Transactions',      difficulty: 'Intermediate',  description: 'Read uncommitted, Read committed, Repeatable read, Serializable — anomalies each prevents',  resource: 'https://www.postgresql.org/docs/current/transaction-iso.html' },
  { id: 46, title: 'Dirty Read, Non-repeatable Read, Phantom Read', group: 'Transactions', difficulty: 'Intermediate', description: 'The three read anomalies — which isolation level prevents each',               resource: 'https://www.postgresql.org/docs/current/transaction-iso.html' },
  { id: 47, title: 'Optimistic vs Pessimistic Locking', group: 'Transactions',      difficulty: 'Intermediate',  description: 'Versioning (optimistic), SELECT FOR UPDATE (pessimistic), when to use each',             resource: 'https://www.baeldung.com/jpa-optimistic-locking' },
  { id: 48, title: 'Deadlocks',                         group: 'Transactions',      difficulty: 'Advanced',      description: 'How deadlocks occur, detection, prevention (consistent lock ordering), PostgreSQL detection', resource: 'https://www.postgresql.org/docs/current/explicit-locking.html' },
  { id: 49, title: 'SAVEPOINT & Nested Transactions',   group: 'Transactions',      difficulty: 'Advanced',      description: 'Partial rollback, savepoint naming, nested transaction simulation',                        resource: 'https://www.postgresql.org/docs/current/sql-savepoint.html' },
  { id: 50, title: 'MVCC (Multi-Version Concurrency Control)', group: 'Transactions', difficulty: 'Advanced',    description: 'How PostgreSQL avoids read locks, snapshot isolation, xid wraparound',                    resource: 'https://www.postgresql.org/docs/current/mvcc-intro.html' },

  // ── PERFORMANCE ───────────────────────────────────────────────
  { id: 51, title: 'Query Optimization Workflow',       group: 'Performance',       difficulty: 'Intermediate',  description: 'EXPLAIN → identify bottleneck → add index or rewrite → verify improvement',                resource: 'https://use-the-index-luke.com/' },
  { id: 52, title: 'Connection Pooling (PgBouncer)',    group: 'Performance',       difficulty: 'Intermediate',  description: 'Why connection pools matter, PgBouncer modes, pool sizing formula',                        resource: 'https://www.pgbouncer.org/' },
  { id: 53, title: 'Partitioning (Range, List, Hash)',  group: 'Performance',       difficulty: 'Advanced',      description: 'Table partitioning strategies, partition pruning, partition-wise joins',                   resource: 'https://www.postgresql.org/docs/current/ddl-partitioning.html' },
  { id: 54, title: 'Read Replicas & Read/Write Splitting', group: 'Performance',   difficulty: 'Advanced',      description: 'Replication lag, routing reads to replicas, eventual consistency trade-off',               resource: 'https://www.postgresql.org/docs/current/high-availability.html' },
  { id: 55, title: 'Caching Layer (Redis in front of DB)', group: 'Performance',   difficulty: 'Intermediate',  description: 'Cache-aside pattern, TTL strategy, cache invalidation, stampede prevention',               resource: 'https://redis.io/docs/manual/patterns/caching/' },

  // ── PostgreSQL SPECIFIC ───────────────────────────────────────
  { id: 56, title: 'JSONB Columns & Operators',         group: 'PostgreSQL',        difficulty: 'Intermediate',  description: '->, ->>, @>, #>, jsonb_each, indexes on JSONB — when to use NoSQL in Postgres',           resource: 'https://www.postgresql.org/docs/current/datatype-json.html' },
  { id: 57, title: 'Arrays & Array Functions',          group: 'PostgreSQL',        difficulty: 'Intermediate',  description: 'Array data type, unnest(), ANY(), array_agg(), GIN indexes on arrays',                    resource: 'https://www.postgresql.org/docs/current/arrays.html' },
  { id: 58, title: 'Full-Text Search',                  group: 'PostgreSQL',        difficulty: 'Advanced',      description: 'tsvector, tsquery, to_tsvector, GIN index, ts_rank, phrase search',                      resource: 'https://www.postgresql.org/docs/current/textsearch.html' },
  { id: 59, title: 'Stored Procedures & Functions',     group: 'PostgreSQL',        difficulty: 'Intermediate',  description: 'PL/pgSQL, CREATE FUNCTION, CREATE PROCEDURE, triggers, DO blocks',                       resource: 'https://www.postgresql.org/docs/current/plpgsql.html' },
  { id: 60, title: 'Triggers',                          group: 'PostgreSQL',        difficulty: 'Intermediate',  description: 'BEFORE/AFTER triggers, row vs statement level, audit logging pattern',                    resource: 'https://www.postgresql.org/docs/current/triggers.html' },
  { id: 61, title: 'COPY & Bulk Loading',               group: 'PostgreSQL',        difficulty: 'Intermediate',  description: 'COPY FROM/TO, pg_dump, pg_restore, fast bulk insert strategies',                         resource: 'https://www.postgresql.org/docs/current/sql-copy.html' },

  // ── DATABASE DESIGN THEORY ────────────────────────────────────
  { id: 62, title: 'CAP Theorem',                       group: 'Theory',            difficulty: 'Intermediate',  description: 'Consistency vs Availability vs Partition Tolerance — which 2 can you choose?',             resource: 'https://www.ibm.com/topics/cap-theorem' },
  { id: 63, title: 'PACELC Theorem',                    group: 'Theory',            difficulty: 'Advanced',      description: 'Extension of CAP — latency vs consistency trade-off even without partitions',             resource: 'https://en.wikipedia.org/wiki/PACELC_theorem' },
  { id: 64, title: 'BASE vs ACID',                      group: 'Theory',            difficulty: 'Intermediate',  description: 'Basically Available, Soft state, Eventually consistent — NoSQL model',                    resource: 'https://www.johndcook.com/blog/2009/07/06/brewer-cap-theorem-base/' },
  { id: 65, title: 'Sharding Strategies',               group: 'Theory',            difficulty: 'Advanced',      description: 'Horizontal vs vertical sharding, hash vs range sharding, hotspot problems',               resource: 'https://www.digitalocean.com/community/tutorials/understanding-database-sharding' },
  { id: 66, title: 'Replication (Leader-Follower, Multi-Leader)', group: 'Theory',  difficulty: 'Advanced',      description: 'Sync vs async replication, replication lag, conflict resolution',                        resource: 'https://ddia.vonng.com/#/ch5' },

  // ── NoSQL ─────────────────────────────────────────────────────
  { id: 67, title: 'When to use NoSQL vs SQL',          group: 'NoSQL',             difficulty: 'Intermediate',  description: 'Structured vs unstructured, scale patterns, the false dichotomy',                         resource: 'https://www.mongodb.com/nosql-explained/nosql-vs-sql' },
  { id: 68, title: 'MongoDB Data Modeling',             group: 'NoSQL',             difficulty: 'Intermediate',  description: 'Embed vs reference, document size limits, denormalization by default',                    resource: 'https://www.mongodb.com/docs/manual/core/data-modeling-introduction/' },
  { id: 69, title: 'Redis Data Structures',             group: 'NoSQL',             difficulty: 'Intermediate',  description: 'Strings, Lists, Sets, Sorted Sets, Hashes, Streams — right tool for each use case',       resource: 'https://redis.io/docs/data-types/' },
  { id: 70, title: 'Redis Persistence (RDB & AOF)',     group: 'NoSQL',             difficulty: 'Advanced',      description: 'Snapshot vs append-only log, durability guarantees, redis.conf',                        resource: 'https://redis.io/docs/management/persistence/' },

  // ── MIGRATIONS & OPS ──────────────────────────────────────────
  { id: 71, title: 'Zero-downtime Migrations',          group: 'Migrations & Ops',  difficulty: 'Advanced',      description: 'Expand-contract pattern, adding nullable columns, backfilling data safely',               resource: 'https://www.braintreepayments.com/blog/safe-operations-for-high-volume-postgresql/' },
  { id: 72, title: 'Database Backup & Recovery',        group: 'Migrations & Ops',  difficulty: 'Intermediate',  description: 'pg_dump, WAL archiving, point-in-time recovery, RTO vs RPO',                            resource: 'https://www.postgresql.org/docs/current/backup.html' },
  { id: 73, title: 'pg_stat_statements & Monitoring',  group: 'Migrations & Ops',  difficulty: 'Advanced',      description: 'Identifying slow queries in production, pg_stat_activity, lock monitoring',              resource: 'https://www.postgresql.org/docs/current/pgstatstatements.html' },
  { id: 74, title: 'Connection & Pool Monitoring',      group: 'Migrations & Ops',  difficulty: 'Intermediate',  description: 'max_connections, idle connections, pg_stat_activity, pool exhaustion debugging',        resource: 'https://www.postgresql.org/docs/current/monitoring-stats.html' },
]
