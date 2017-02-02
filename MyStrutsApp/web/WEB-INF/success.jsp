<%-- 
    Document   : success
    Created on : Feb 1, 2017, 8:04:27 AM
    Author     : codyperakslis
--%>
<%@ taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login Success</title>
    </head>
    <body>
        <h1>Congratulations!</h1>
        <p>You have successfully logged in.</p>
        <p>Your name is: <bean:write name="LoginForm" property="name" />.</p>
        <p>Your email is: <bean:write name="LoginForm" property="email" />.</p>
    </body>
</html>
