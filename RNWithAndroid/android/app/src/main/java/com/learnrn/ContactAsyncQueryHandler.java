package com.learnrn;

import android.content.AsyncQueryHandler;
import android.content.ContentResolver;

/**
 * Created by shakespace on 2018/3/15.
 */

public class ContactAsyncQueryHandler extends AsyncQueryHandler {

    private static final String TAG = "ContactAsyncQueryHandle";

    public ContactAsyncQueryHandler(ContentResolver cr) {
        super(cr);
    }



}
