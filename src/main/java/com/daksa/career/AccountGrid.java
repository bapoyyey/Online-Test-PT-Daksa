package com.daksa.career;

import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.editor.Editor;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import java.util.List;

/**
 * This class represents Account Table
 */
public class AccountGrid extends Grid<Account> {
    private AccountService accountService;
    private Editor<Account> editor;

    public AccountGrid(List<Account> accounts, AccountService accountService) {
        this.accountService = accountService;
        setupGrid(accounts);
    }

    private void setupGrid(List<Account> accounts) {
        // Setup Grid
//        setItems(accounts);
        setItems(accountService.getAllAccounts());

        // Setup Columns
        Grid.Column<Account> idColumn = addColumn(Account::getId)
                .setHeader("ID")
                .setWidth("100px")
                .setFlexGrow(0);
        Grid.Column<Account> nameColumn = addColumn(Account::getName)
                .setHeader("Name")
                .setWidth("150px")
                .setFlexGrow(0);
        Grid.Column<Account> addressColumn = addColumn(Account::getAddress)
                .setHeader("Address");
        Grid.Column<Account> birthDateColumn = addColumn(Account::getBirthDate)
                .setHeader("BirthDate");
        Grid.Column<Account> allowNegativeBalanceColumn = addColumn(Account::isAllowNegativeBalance)
                .setHeader("AllowNegativeBalance");

        // Add Edit Button Column
        Grid.Column<Account> editColumn = addComponentColumn(this::createEditButton)
                .setWidth("150px")
                .setFlexGrow(0);
        
        // Setup Editor
        editor = getEditor();
        Binder<Account> binder = new Binder<>(Account.class);
        editor.setBinder(binder);
        editor.setBuffered(true);
        
        // Setup Components for Editing
//        TextField idField = new TextField();
//        idField.setWidthFull();
//        binder.forField(idField).bind(Account::getId, Account::setId);
//        idColumn.setEditorComponent(idField);

        TextField nameField = new TextField();
        nameField.setWidthFull();
        binder.forField(nameField).bind(Account::getName, Account::setName);
        nameColumn.setEditorComponent(nameField);

        TextField addressField = new TextField();
        addressField.setWidthFull();
        binder.forField(addressField).bind(Account::getAddress, Account::setAddress);
        addressColumn.setEditorComponent(addressField);
//        binder.bind(idField, Account::getId, Account::setId);
        // Setup Buttons for Saving and Cancelling Edits
//        Button saveButton = new Button("Save", e -> editor.save());
        Button saveButton = new Button("Save", e -> {
            if (binder.isValid()) {
                Account editedAccount = editor.getItem();
                String editedId = editedAccount.getId(); // Get the edited ID
                editor.save(); // Attempt to save changes

                // Check if the saved account's ID conflicts with any existing account
                if (isIdConflict(editedAccount)) {
                    Notification.show("ID conflicts with an existing account. Please use a different ID.");
                    // If there's a conflict, cancel the save operation
//                    editor.cancel();
                    //editor save editedId
                    editedAccount.setId(editedId);
                    editor.refresh();
                }   
            } else {
                Notification.show("Please fill in all required fields.");
            }
        }); 
        

        Button cancelButton = new Button(VaadinIcon.CLOSE.create(), e -> editor.cancel());
        cancelButton.addThemeVariants(ButtonVariant.LUMO_ICON, ButtonVariant.LUMO_ERROR);
        HorizontalLayout actions = new HorizontalLayout(saveButton, cancelButton);
        actions.setPadding(false);
        editColumn.setEditorComponent(actions);
    }

    private Button createEditButton(Account account) {
        Button editButton = new Button("Edit");
        editButton.addClickListener(e -> {
            if (editor.isOpen())
                editor.cancel();
            getEditor().editItem(account);
        });
        return editButton;
    }
    
    private boolean isIdConflict(Account editedAccount) {
        List<Account> allAccounts = accountService.getAllAccounts();
        return allAccounts.stream()
                .anyMatch(account -> !account.equals(editedAccount) && account.getId().equals(editedAccount.getId()));
    }


}
