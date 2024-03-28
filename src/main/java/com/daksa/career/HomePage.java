 package com.daksa.career;

import com.vaadin.cdi.annotation.RouteScoped;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.HasText;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.checkbox.CheckboxGroup;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.formlayout.FormLayout.ResponsiveStep;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.editor.Editor;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Input;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.radiobutton.RadioButtonGroup;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.component.upload.receivers.MemoryBuffer;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.converter.LocalDateToDateConverter;
import com.vaadin.flow.data.validator.EmailValidator;
import com.vaadin.flow.router.Route;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

/**
 * @author Muhammad Rizki
 */
@RouteScoped
@Route(value = "")
@StyleSheet("./frontend/styles/main.css")
public class HomePage extends Div {

    private static final Logger LOG = LoggerFactory.getLogger(HomePage.class);
    private Binder<Account> accountBinder; // save form value
    private AccountGrid accountGrid; // account table
    @Inject
    private AccountService accountService;
    @Inject
    private AccountRepository accountRepository;

    private TextField first,second,third;
    private HasText firstNameValidationMessage;
    private HasText lastNameValidationMessage;
    private HasText emailValidationMessage;

    /**
     * This method is invoked after the constructor
     * Defining all component which used in the apps
     */
    @PostConstruct
    public void init() {
        LOG.info("init");
        accountBinder = new Binder<>();
        addClassName("container");
        add(createRegisterPanel(), createUploadPanel(), createAccountTable());
    }

    /**
     * This panel is used for create the register panel on the top of the page
     *
     * @return FormLayout
     * Fill the rest with defined fields for completing the assignment
     */
    private VerticalLayout createRegisterPanel() {
        VerticalLayout registerPanel = new VerticalLayout();

        TextField idField = new TextField("ID");
        TextField nameField = new TextField("Name");
        TextField addressField = new TextField("Address");
        DatePicker birthDatePicker = new DatePicker("Birth Date");
        RadioButtonGroup<String> allowNegativeBalanceGroup = new RadioButtonGroup<>();
        allowNegativeBalanceGroup.setLabel("Allow Negative Balance");
        allowNegativeBalanceGroup.setItems("Yes", "No");

        Button submitButton = new Button("Submit");
        submitButton.addClickListener(event -> register(idField.getValue(), nameField.getValue(),
                addressField.getValue(), birthDatePicker.getValue(), allowNegativeBalanceGroup.getValue().equals("Yes")));

        registerPanel.add(idField, nameField, addressField, birthDatePicker, allowNegativeBalanceGroup, submitButton);

        return registerPanel;
    }

    private void register(String id, String name, String address, LocalDate birthDate, boolean allowNegativeBalance) {
        LOG.info("Registering account: {}", name);
        if (isIdExists(id)) {
            Notification.show("ID already exists. Please use a different ID.");
            return;
        }
        else if(id.length() > 16){
            Notification.show("ID is more than 16 digit.");
            return;
        }
        else if (id == "") {
            Notification.show("Please input id.");
            return;
        }
        else if (birthDate == null) {
            Notification.show("Please select a birth date.");
            return;
        }
        else{
            Account account = new Account(id, name, address, birthDate, allowNegativeBalance);
            accountService.register(account);
            LOG.info("Account registered successfully.");

            // Refresh the grid with updated data
            accountGrid.setItems(accountService.getAllAccounts());
            Notification.show("Account registered successfully");
        }
        
    }
    private boolean isIdExists(String id) {
        // Implement the logic to check if the ID exists in the Account table data
        // You can use your AccountService or any other method to perform the check
        // Return true if the ID exists, false otherwise
        return accountService.getAllAccounts().stream().anyMatch(account -> account.getId().equals(id));
    }

    /**
     * Registration Batch Panel
     * This panel shows a button to upload file for registration batch
     * Uploaded file were exists in the project folder /batch-file
     */
    private Div createUploadPanel() {
        Div uploadPanel = new Div();
        uploadPanel.addClassName("upload-panel-container");
        MemoryBuffer uploadBatchMemoryBuffer = new MemoryBuffer();

        Upload uploadBatchButton = new Upload(uploadBatchMemoryBuffer);
        uploadBatchButton.setAcceptedFileTypes(".txt"); // Set accepted file types to .txt only

        uploadBatchButton.addSucceededListener(event -> {
            try {
                LOG.info("uploadRegBatch");
                // Check if the uploaded file has .txt extension
                if (!event.getFileName().endsWith(".txt")) {
                    throw new IllegalArgumentException("Only .txt files are allowed.");
                }
                // Proceed with processing the file
                accountService.parseBatch(uploadBatchMemoryBuffer.getInputStream());
                accountGrid.setItems(accountService.getAllAccounts());
            } catch (Exception e) {
                LOG.error(e.getMessage(), e);
                Notification.show(e.getMessage(), 3000, Notification.Position.BOTTOM_CENTER);
            }
        });

        uploadPanel.add(uploadBatchButton);

        return uploadPanel;
    }

    /**
     * This component create Account Table
     */
  private VerticalLayout createAccountTable() {
    VerticalLayout accountTablePanel = new VerticalLayout();
    List<Account> accounts = Collections.emptyList(); // Initialize with an empty list
    accountGrid = new AccountGrid(accounts, accountService);
    accountTablePanel.add(accountGrid);
    return accountTablePanel;
    }

}
