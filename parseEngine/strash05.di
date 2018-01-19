digraph G {
{
node [color=pink;shape=box;];
 0;
}
{
rank = same;
node [color=red;shape=box];
1,2,3;
}
{
rank = same;
node [color=blue;shape=box];
9,10;
}
{
node [color=black;shape=invtrapezium];
4,5,6,7;
}
node [color=green;shape=box];
6->9 [arrowhead=odot];
7->10 [arrowhead=none];
1->4 [arrowhead=none];
8->4 [arrowhead=none];
8->5 [arrowhead=none];
1->5 [arrowhead=none];
4->6 [arrowhead=none];
2->6 [arrowhead=none];
2->7 [arrowhead=none];
5->7 [arrowhead=none];
}
