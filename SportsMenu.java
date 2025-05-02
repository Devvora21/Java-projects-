import java.util.Scanner;


// Interface for Hockey
interface Hockey 
{
    void h(); // Method to insert number of players for Hockey
}

// Interface for Cricket
interface Cricket 
{
    void c(); // Method to insert number of players for Cricket
}

// Interface for Tennis
interface Tennis 
{
    void t(); // Method to insert number of players for Tennis
}

// Player class inherits from all three interfaces
class Player implements Hockey, Cricket, Tennis 
{
    // Data members
    String player_name;
    String type_of_sport;
    int numberOfPlayers;

    // Method to insert player information
    public void insertInfo(String playerName, String sportType) 
    {
        this.player_name = playerName;
        this.type_of_sport = sportType;
    }

    // Display method to show the information
    public void display() 
    {
        System.out.println("Player Name: " + player_name);
        System.out.println("Type of Sport: " + type_of_sport);
        System.out.println("Number of Players required for " + type_of_sport + ": " + numberOfPlayers);
    }

    // Implementation of Hockey method
    @Override
    public void h() 
    {
        numberOfPlayers = 11; // Typically, 11 players are required for Hockey
        System.out.println("Hockey selected. Number of players required: " + numberOfPlayers);
    }

    // Implementation of Cricket method
    @Override
    public void c() 
    {
        numberOfPlayers = 11; // Typically, 11 players are required for Cricket
        System.out.println("Cricket selected. Number of players required: " + numberOfPlayers);
    }

    // Implementation of Tennis method
    @Override
    public void t() 
    {
        numberOfPlayers = 2; // Typically, 2 players are required for Tennis (1v1)
        System.out.println("Tennis selected. Number of players required: " + numberOfPlayers);
    }
}

public class SportsMenu 
{
    public static void main(String[] args) 
    {
        // Scanner object to take user input
        Scanner scanner = new Scanner(System.in);
        Player player = new Player(); // Create an object of the Player class

        while (true) 
        {
            System.out.println("\n---- Sports Menu ----");
            System.out.println("1. Hockey");
            System.out.println("2. Cricket");
            System.out.println("3. Tennis");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();

            // Clear the buffer
            scanner.nextLine();

            switch (choice) 
            {
                case 1: // Hockey
                    player.h(); // Call Hockey method
                    break;
                case 2: // Cricket
                    player.c(); // Call Cricket method
                    break;
                case 3: // Tennis
                    player.t(); // Call Tennis method
                    break;
                case 4: // Exit
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid choice! Please choose again.");
                    continue;
            }

            // After selecting the sport, ask for the player's name
            System.out.print("Enter player's name: ");
            String playerName = scanner.nextLine();

            // Determine the sport name based on user choice
            String sportType = "";
            if (choice == 1) sportType = "Hockey";
            else if (choice == 2) sportType = "Cricket";
            else if (choice == 3) sportType = "Tennis";

            // Insert the player's information into the Player object
            player.insertInfo(playerName, sportType);

            // Display the player's information
            player.display();
        }
    }
}