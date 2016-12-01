package Cybage.net;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Validator
 */
@WebServlet("/Validator")
public class Validator extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Validator() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		response.setContentType("text/html");
		PrintWriter pw=response.getWriter();
		String id=request.getParameter("CustomerId");
		String password=request.getParameter("password");

		//System.out.println(id+"    "+password);
		String dBpassword=null;
		String dBrole=null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/mydb", "root","root");
			PreparedStatement pst1 = conn.prepareStatement("Select * from login where CustomerName=(?)");
			pst1.setString(1, id); 
			ResultSet rst=pst1.executeQuery();
			if(rst.next())
			{
				dBpassword=rst.getString(3);			
				dBrole=rst.getString(4);
	
			}

			if(dBpassword==null)
			{
				pw.println("Either Wrong Employee id /You are Not registered....");
				RequestDispatcher rd=request.getRequestDispatcher("login.html");
				rd.include(request, response);
			}
			else if(!dBpassword.equals(password))
			{
				pw.println("WRONG PASSWORD Retry...");
				RequestDispatcher rd=request.getRequestDispatcher("login.html");
				rd.include(request, response);
			}
			else{
				if(dBrole.equals("admin"))
				{
					RequestDispatcher rd=request.getRequestDispatcher("admin.html");
					rd.forward(request, response);
				}
				else if(dBrole.equals("customer"))
				{
					RequestDispatcher rd=request.getRequestDispatcher("user.html");
					rd.forward(request, response);
				}
			}



		} 
		catch (SQLException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		


	}

	}


