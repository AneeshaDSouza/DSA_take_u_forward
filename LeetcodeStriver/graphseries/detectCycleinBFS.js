
// A JavaScript program to detect cycle in
// an undirected graph using BFS.
var V = 4;
var adj = Array.from(Array(V), ()=>Array());
 
addEdge(adj, 0, 1);
addEdge(adj, 1, 2);
addEdge(adj, 2, 0);
addEdge(adj, 2, 3);
if (isCyclicDisconntected(adj, V))
{
    document.write("Yes");
}
else
{
    document.write("No");
}
 
function addEdge(adj, u, v)
{
    adj[u].push(v);
    adj[v].push(u);
}
function isCyclicConntected(adj, s, V, visited)
{
    // Set parent vertex for every vertex as -1.
    var parent = Array(V).fill(-1);
     
    // Create a queue for BFS
    var q = [];
    // Mark the current node as
    // visited and enqueue it
    visited[s] = true;
    q.push(s);
    while (q.length != 0)
    {
        // Dequeue a vertex from
        // queue and print it
        var u = q.shift();
        // Get all adjacent vertices
        // of the dequeued vertex u.
        // If a adjacent has not been
        // visited, then mark it visited
        // and enqueue it. We also mark parent
        // so that parent is not considered
        // for cycle.
        for (var i = 0; i < adj[u].length; i++)
        {
            var v = adj[u][i];
            if (!visited[v])
            {
                visited[v] = true;
                q.push(v);
                parent[v] = u;
            }
            else if (parent[u] != v)
            {
                return true;
            }
        }
    }
    return false;
}
function isCyclicDisconntected(adj, V)
{
    // Mark all the vertices as not visited
    var visited = Array(V).fill(false);
    for (var i = 0; i < V; i++)
    {
        if (!visited[i] &&
            isCyclicConntected(adj, i, V, visited))
        {
            return true;
        }
    }
    return false;
}