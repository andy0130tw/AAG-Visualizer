digraph G {
{
node [color=pink;shape=box;];
 0;
}
{
rank = same;
node [color=red;shape=box];
1,4,2,5,10;
}
{
rank = same;
node [color=blue;shape=box];
13,14;
}
{
node [color=black;shape=invtrapezium];
3,6,7,8,11,9,12;
}
node [color=green;shape=box];
9->13 [arrowhead=odot];
12->14 [arrowhead=odot];
1->3 [arrowhead=none];
2->3 [arrowhead=none];
2->6 [arrowhead=none];
5->6 [arrowhead=none];
6->7 [arrowhead=odot];
6->7 [arrowhead=odot];
4->8 [arrowhead=none];
7->8 [arrowhead=odot];
7->11 [arrowhead=odot];
10->11 [arrowhead=none];
3->9 [arrowhead=odot];
8->9 [arrowhead=odot];
8->12 [arrowhead=odot];
11->12 [arrowhead=odot];
}
