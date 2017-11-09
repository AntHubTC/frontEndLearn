Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: [
    	//这里相当于指定了一个绝对路径"文件名@应用名称.文件路径"
        'Users@AM.store'
    ],

    models: [
    	//这里相当于指定了一个绝对路径"文件名@应用名称.文件路径"
        'User@AM.model'
    ],

    views: [
    	//这里相当于指定了一个绝对路径"文件名@应用名称.文件路径"
        'Edit@AM.view.user',
        'List@AM.view.user'
    ],

    refs: [
        {
            ref: 'usersPanel',
            selector: 'panel'
        }
    ],

    init: function() {
        this.control({
            'viewport > userlist': {
            	//配置监听
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    editUser: function(grid, record) {
        var edit = Ext.create('AM.view.user.Edit').show();

        edit.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();
    }
});
