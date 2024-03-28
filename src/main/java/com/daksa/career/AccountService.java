package com.daksa.career;

import com.vaadin.flow.component.notification.Notification;
import java.io.BufferedReader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;

/**
 * @author Muhammad Rizki
 * This class is used to perform logic of account domain in the apps
 */
@Dependent
public class AccountService {

    private static final Logger LOG = LoggerFactory.getLogger(AccountService.class);
    @Inject
    private AccountRepository accountRepository;
    public List<Account> getAllAccounts() {
        return accountRepository.getAccounts();
    }

    /**
     * This method is used to register the account
     *
     * @param account
     */
    public void register(Account account) {
        LOG.info("register");
        //TODO : code here
        accountRepository.save(account);
    }

    /**
     * This method is used for parsing file batch registration
     *
     * @param batchRegisStream
     * @throws IOException
     */
public void parseBatch(InputStream batchRegisStream) throws IOException {
        LOG.info("parseBatch");
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(batchRegisStream))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String dump;
                try {
                        dump = line.substring(0, 16);
                    } catch (IndexOutOfBoundsException e) {
                        LOG.warn("Invalid format", line);
                        continue; // Skip to the next line
                    }
                int spaceIndex = dump.indexOf(' ');
                if (spaceIndex == -1) {
                    String id = line.substring(0, 16).trim();
                    String remainingLine = line.substring(16).trim(); 
                    
                    String nameLengthStr = remainingLine.substring(0, 2);
                    int nameLength;
                    try {
                        nameLength = Integer.parseInt(nameLengthStr);
                    } catch (NumberFormatException e) {
                        LOG.warn("Invalid format", line);
                        continue; // Skip to the next line
                    }
                    if (remainingLine.length() < 2 + nameLength) {
                        LOG.warn("Invalid format", line);
                        continue;
                    }
                    String name = remainingLine.substring(2, 2 + nameLength).trim(); 
                    if (name.length() != nameLength) {
                        LOG.warn("Invalid format", line);
                        continue;
                    }


                    String remainingAfterName = remainingLine.substring(2 + nameLength).trim(); 
                    String addressLengthStr = remainingAfterName.substring(0, 2);
                    int addressLength;
                    try {
                        addressLength = Integer.parseInt(addressLengthStr);
                    } catch (NumberFormatException e) {
                        LOG.warn("Invalid format", line);
                        continue;
                    }
                    if (remainingAfterName.length() < 2 + addressLength) {
                        LOG.warn("Invalid format", line);
                        continue;
                    }
                    String address = remainingAfterName.substring(2, 2 + addressLength).trim();

                    
                    String birthDateStr;
                    try {
                        birthDateStr = remainingAfterName.substring(2 + addressLength, 10 + addressLength);
                    } catch (IndexOutOfBoundsException e) {
                        LOG.warn("Invalid format", line);
                        continue; 
                    }
                    LocalDate birthDate;
                    try {
                        birthDate = LocalDate.parse(birthDateStr, DateTimeFormatter.ofPattern("yyyyMMdd"));
                    } catch (DateTimeParseException e) {
                        LOG.warn("Invalid format", line);
                        continue;
                    }

                    
                    String allowNegativeBalanceStr = remainingAfterName.substring(10 + addressLength, 11 + addressLength);
                    boolean allowNegativeBalance = allowNegativeBalanceStr.equals("Y");
                    if (isIdExists(id)) {
                        LOG.warn("ID is existed", id);
                    } else {
                        Account account = new Account(id, name, address, birthDate, allowNegativeBalance);
                        register(account);
                    }
                }
                
                else{
                    String id = line.substring(0, spaceIndex).trim();

                    String remainingLine = line.substring(spaceIndex + 1).trim(); 
                    String nameLengthStr = remainingLine.substring(0, 2);
                    int nameLength;
                    try {
                        nameLength = Integer.parseInt(nameLengthStr);
                    } catch (NumberFormatException e) {
                        LOG.warn("Invalid format", line);
                        continue; 
                    }
                    if (remainingLine.length() < 2 + nameLength) {
                        LOG.warn("Invalid format", line);
                        continue;
                    }
                    String name = remainingLine.substring(2, 2 + nameLength).trim(); 
                    if (name.length() != nameLength) {
                        LOG.warn("Invalid format", line);
                        continue;
                    }
                    String remainingAfterName = remainingLine.substring(2 + nameLength).trim(); 


                    String addressLengthStr = remainingAfterName.substring(0, 2);
                    int addressLength;
                    try {
                        addressLength = Integer.parseInt(addressLengthStr);
                    } catch (NumberFormatException e) {
                        LOG.warn("Invalid format", line);
                        continue;
                    }
                    if (remainingAfterName.length() < 2 + addressLength) {
                        LOG.warn("Invalid format", line);
                        continue;
                    }
                    String address = remainingAfterName.substring(2, 2 + addressLength).trim(); // Trim any leading or trailing spaces


                    String birthDateStr;
                    try {
                        birthDateStr = remainingAfterName.substring(2 + addressLength, 10 + addressLength);
                    } catch (IndexOutOfBoundsException e) {
                        LOG.warn("Invalid format", line);
                        continue;
                    }
                    LocalDate birthDate;
                    try {
                        birthDate = LocalDate.parse(birthDateStr, DateTimeFormatter.ofPattern("yyyyMMdd"));
                    } catch (DateTimeParseException e) {
                        LOG.warn("Invalid format", line);
                        continue;
                    }

                    
                    String allowNegativeBalanceStr = remainingAfterName.substring(10 + addressLength, 11 + addressLength);
                    boolean allowNegativeBalance = allowNegativeBalanceStr.equals("Y");
                    if (isIdExists(id)) {
                        LOG.warn("ID is existed", id);
                    } else {
                        // Create the account object using the parsed data
                        Account account = new Account(id, name, address, birthDate, allowNegativeBalance);
                        register(account);
                    }
                }

            }
        }
    }

    
    private boolean isIdExists(String id) {
        return getAllAccounts().stream().anyMatch(account -> account.getId().equals(id));
    }

    
}
